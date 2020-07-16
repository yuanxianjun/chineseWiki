<template>
  <div class="app-container">
    <div class="addBtn">
      <el-button type="success" @click="handleCreate()">添加文章</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="标题" width="150" align="center">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>

      <el-table-column label="英文标题" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.titleEn }}</span>
        </template>
      </el-table-column>

      <el-table-column label="一级栏目" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.channelNameOne }}</span>
        </template>
      </el-table-column>

      <el-table-column label="二级栏目" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.channelNameTwo }}</span>
        </template>
      </el-table-column>

      <el-table-column label="文章标题图" width="300" align="center">
        <template slot-scope="scope">
          <img class="imgWH" :src="scope.row.imgPath" />
        </template>
      </el-table-column>

      <el-table-column label="发布时间" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.publishTime | toLolcalTime }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | toLolcalTime}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button type="success" size="mini" @click="handleDetail(scope.row)">详情</el-button>
          <el-button
            v-if="scope.row.status!='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.pageNo"
      :limit.sync="listQuery.pageSize"
      @pagination="fetchData"
    />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item v-if="dialogStatus=='update' || !disableBool" label="ID" prop="id">
          <el-input v-model="temp.id" disabled />
        </el-form-item>

        <el-form-item label="标题:" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>

        <el-form-item label="英文标题：" prop="titleEn">
          <el-input v-model="temp.titleEn" />
        </el-form-item>

        <el-form-item label="封面图：" prop="titleEn">
          <el-upload
            v-if="dialogStatus !=='detail'"
            class="upload-demo"
            :action="actionUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="uploadSuccess"
            :file-list="fileList"
            :limit="1"
            list-type="picture"
            ref="upload"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div class="imgCon" v-if="dialogStatus=='detail'">
            <img :src="temp.imgPath" />
          </div>
        </el-form-item>
        <el-form-item label="一级栏目：" prop="channelOne">
          <el-select
            v-model="temp.channelOne"
            class="filter-item"
            placeholder="请选择"
            @change="changeChannelOne"
          >
            <el-option
              v-for="item in channelOneData"
              :key="item.id"
              :label="item.channelName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="temp.channelOne" label="二级栏目:" prop="channelTwo">
          <el-select
            v-model="temp.channelTwo"
            class="filter-item"
            placeholder="请选择"
            @change="changeChannelTwo"
          >
            <el-option
              v-for="item in channelTwoData"
              :key="item.id"
              :label="item.channelName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item v-if="temp.channelTwo" label="三级栏目:" prop="channelTwo">
          <el-select v-model="temp.channelThree" class="filter-item" placeholder="请选择">
            <el-option
              v-for="item in channelThreeData"
              :key="item.id"
              :label="item.channelName"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="时间:" prop="publishTime">
          <el-date-picker
            v-model="temp.publishTime"
            align="right"
            type="date"
            placeholder="选择日期"
            :default-value="temp.publishTime"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="文章链接" prop="linkUrl">
          <el-input
            type="input"
            rows="4"
            placeholder="请输入带有http:// 或 https:// 的完整链接"
            v-model="temp.linkUrl"
          />
        </el-form-item>
        <el-form-item label="文章简介：" prop="stract">
          <el-input type="textarea" rows="4" v-model="temp.stract" />
        </el-form-item>

        <el-form-item label="内容:" prop="content">
          <tinymce v-if="disableBool" v-model="temp.content" :height="300" :width="600" />
          <div class="formCon" v-if="!disableBool" v-html="temp.content"></div>
        </el-form-item>

        <el-form-item v-if="dialogStatus=='update' || !disableBool" label="创建时间" prop="createTime">
          <span>{{temp.createTime | toLolcalTime}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="disableBool">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="dialogStatus==='create'?createData('dataForm'):updateData()"
        >确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getList,
  create,
  del,
  upd,
  detail,
  channelOneList,
  channelTwoList,
  channelThreeList
} from "@/api/article";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import Tinymce from "@/components/Tinymce"; // secondary package based on el-tinymce
export default {
  name: "articles",
  components: { Pagination, Tinymce },
  filters: {
    // 转换时间
    toLolcalTime(time) {
      let a = new Date(time);
      return a.toLocaleString();
    }
  },
  data() {
    return {
      actionUrl: process.env.VUE_APP_BASE_API + "sys/common/upload",
      fileList: [],
      total: 0,
      listLoading: true,
      listQuery: {
        pageNo: 1,
        pageSize: 20,
        type: 1 //类型 1文章 2 合作伙伴 3 其它类目
      },
      list: null,
      channelOneData: [],
      channelTwoData: [],
      channelThreeData: [],
      listLoading: true,
      disableBool: true,
      typeList: [
        {
          key: 1,
          display_name: "文章"
        },
        {
          key: 2,
          display_name: "合作伙伴"
        },
        {
          key: 3,
          display_name: "其他类目"
        }
      ],
      textMap: {
        update: "编辑文章",
        create: "添加文章"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      temp: {
        name: "",
        type: 1,
        publishTime: Date.now(),
        linkUrl: "",
        stract: "",
        content: `<h1 style="text-align: center;">欢迎大家来编写文章</h1>
      <p style="text-align: center; font-size: 15px;">
      <img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" />
      `
      },
      rules: {
        title: [{ required: true, message: "名称是必填的", trigger: "blur" }],
        articleUrl: [
          { required: true, message: "articleUrl是必填的", trigger: "blur" }
        ],
        channelOne: [
          { required: true, message: "一级栏目是必选的", trigger: "change" }
        ],
        channelTwo: [
          { required: true, message: "二级栏目是必选的", trigger: "change" }
        ],
        channelThree: [
          { required: true, message: "二级栏目是必选的", trigger: "change" }
        ]
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    uploadSuccess(res, fileList) {
      this.temp.imgPath = res.content.url + res.content.path;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 继续选择子级
    changeChannelOne(currentVal) {
      this.getChannel2Data(currentVal);
    },
    // 请求三级的数据
    changeChannelTwo(currentVal) {
      this.getChannel3Data(currentVal);
    },
    resetTemp() {
      this.temp = {
        name: "",
        type: 1,
        articleUrl: "",
        content: "",
        stract: "",
        linkUrl: "",
        publishTime: new Date()
      };
    },
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = response.content.list.list;
        this.total = Number(response.content.list.total);
        this.resetTemp();
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      });
    },
    getChannelData() {
      channelOneList().then(response => {
        this.channelOneData = response.content.list;
      });
    },
    getChannel2Data(id) {
      channelTwoList({ parentId: id }).then(response => {
        this.channelTwoData = response.content.list;
      });
    },
    getChannel3Data(id) {
      channelThreeList({ parentId: id }).then(response => {
        this.channelThreeData = response.content.list;
      });
    },
    // 添加文章 向后台添加
    createData(formName) {
      delete this.temp.updTime;
      delete this.temp.createTime;
      this.$refs[formName].validate(valid => {
        if (valid) {
          create(this.temp).then(() => {
            this.dialogFormVisible = false;
            this.$refs.upload.clearFiles();
            this.fetchData();
            this.$notify({
              title: "Success",
              message: "添加成功  ",
              type: "success",
              duration: 2000
            });
          });
        } else {
          console.log("请填写必填信息");
          return false;
        }
      });
    },
    // 编辑文章 调用后台修改
    updateData() {
      delete this.temp.updTime;
      delete this.temp.createTime;
      this.temp.publishTime = new Date(this.temp.publishTime);
      upd(this.temp).then(() => {
        this.dialogFormVisible = false;
        this.fetchData();
        this.$notify({
          title: "Success",
          message: "修改成功",
          type: "success",
          duration: 2000
        });
      });
    },
    // 显示添加form框
    handleCreate() {
      this.fileList = [];
      this.disableBool = true;
      this.getChannelData();
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;

      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    //  显示修改form框
    handleUpdate(row) {
      this.getChannelData();
      this.getChannel2Data(row.channelOne);
      this.getChannel3Data(row.channelTwo);

      this.temp = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.disableBool = true;
      this.dialogFormVisible = true;
      if (row.imgPath) {
        let obj = {
          url: row.imgPath
        };
        this.fileList = [];
        this.fileList.push(obj);
      } else {
        this.fileList = [];
      }
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleFilter() {
      this.listQuery.page = 1;
      this.getList();
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: "操作Success",
        type: "success"
      });
      row.status = status;
    },
    handleDetail(row) {
      this.dialogStatus = "detail";
      detail({ id: row.id }).then(res => {
        this.temp = Object.assign({}, row); // copy obj
        this.disableBool = false;
        this.dialogFormVisible = true;
      });
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          del({ id: row.id }).then(() => {
            this.fetchData();
            this.$notify({
              message: "删除成功 ",
              type: "success",
              duration: 2000
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.formCon {
  width: 700px;
  padding: 10px;
  border: 1px solid #eee;
}
.imgCon {
  width: 300px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
.addBtn {
  margin-bottom: 10px;
}
.el-form-item__label {
  width: 100px !important;
}
.imgWH {
  width: 200px;
  height: 150px;
}
</style>