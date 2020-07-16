<template>
  <div class="app-container">
    <div class="addBtn">
      <el-button type="success" @click="handleCreate()">添加{{currentStatus | statusFilter}}</el-button>
      <el-button type="primary" @click="handleBack">返回</el-button>
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
      <el-table-column label="名称" align="center">
        <template slot-scope="scope">{{ scope.row.channelName }}</template>
      </el-table-column>

      <el-table-column label="描述" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否显示" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.isShow | isShowFilter}}</span>
        </template>
      </el-table-column>
      <el-table-column label="级别" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.level | statusFilter }}</span>
        </template>
      </el-table-column>
      <el-table-column label="排序" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sort }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="创建时间" align="center" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | toLolcalTime}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="操作" width="400">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button
            v-if="currentStatus==1"
            type="success"
            size="mini"
            @click="fetchTwoData(scope.row)"
          >二级栏目</el-button>
          <el-button
            v-if="currentStatus==2"
            type="success"
            size="mini"
            @click="fetchThreeData(scope.row)"
          >三级栏目</el-button>
          <el-button type="info" size="mini" @click="handleDetail(scope.row)">详情</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="fetchData"
    />
    <!-- form -->

    <el-dialog :title="textMap[dialogStatus] " :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="right"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item v-if="dialogStatus=='update' || !disableBool" label="ID" prop="id">
          <el-input v-model="temp.id" disabled />
        </el-form-item>
        <el-form-item label="名称" prop="channelName">
          <el-input v-model="temp.channelName" />
        </el-form-item>
        <el-form-item label="栏目路径" prop="channelPath">
          <el-input v-model="temp.channelPath" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input type="textarea" v-model="temp.description" />
        </el-form-item>

        <el-form-item label="排序" prop="sort">
          <el-input v-model="temp.sort" />
        </el-form-item>
        <el-form-item label="显示" prop="sort">
          <el-radio v-model="temp.isShow" label="1">是</el-radio>
          <el-radio v-model="temp.isShow" label="0">否</el-radio>
        </el-form-item>

        <el-form-item label="父ID" prop="parentId">
          <el-input v-model="temp.parentId" disabled />
        </el-form-item>

        <el-form-item label="等级" prop="level">
          <el-select v-model="temp.level" disabled class="filter-item" placeholder="请选择">
            <el-option
              v-for="item in levelList"
              :key="item.key"
              :label="item.display_name"
              :value="item.key"
            />
          </el-select>
        </el-form-item>

        <el-form-item v-if="dialogStatus=='update' || !disableBool" label="创建时间" prop="createTime">
          <span>{{temp.createTime | toLolcalTime}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="disableBool">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  oneList,
  twoList,
  threeList,
  create,
  del,
  upd,
  detail
} from "@/api/channel";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
export default {
  name: "channels",
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: "一级栏目",
        2: "二级栏目",
        3: "三级栏目",
        4: "四级栏目",
        5: "五级栏目",
        6: "六级栏目"
      };
      return statusMap[status];
    },
    isShowFilter(is) {
      return is == 1 ? "是" : "否";
    },
    // 转换时间
    toLolcalTime(time) {
      let a = new Date(time);
      return a.toLocaleString();
    }
  },
  data() {
    return {
      currentStatus: 1,
      currentParentId: "",
      total: 0,
      listLoading: true,
      listQuery: {
        pageNo: 1,
        pageSize: 20
      },
      currentRow: {},
      currentTwoRow: {},
      currentThreeRow: {},
      list: null,
      listLoading: true,
      disableBool: true,
      levelList: [
        {
          key: 1,
          display_name: "一级"
        },
        {
          key: 2,
          display_name: "二级"
        },
        {
          key: 3,
          display_name: "三级"
        },
        {
          key: 4,
          display_name: "四级"
        },
        {
          key: 5,
          display_name: "五级"
        }
      ],
      textMap: {
        update: "编辑栏目",
        create: "添加栏目"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      temp: {
        isShow: "1"
      },
      rules: {
        channelName: [
          { required: true, message: "名称是必填的", trigger: "blur" }
        ],
        channelPath: [
          { required: true, message: "页面路径是必填的", trigger: "blur" }
        ]

        // channelD: [{ required: true, message: 'channelUrl是必填的', trigger: 'blur' }]
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 刷新当前页面
    handleBack() {
      // location.reload()

      this.currentStatus = this.currentStatus == 1 ? 1 : this.currentStatus - 1;

      if (this.currentStatus == 1) {
        this.fetchData();
      } else if (this.currentStatus == 2) {
        this.fetchTwoData(this.currentTwoRow);
      } else if (this.currentStatus == 3) {
        this.fetchThreeData(this.currentThreeRow);
      }
      // this.$router.back(0);
    },
    // 重置输入值
    resetTemp() {
      this.temp = {
        name: "",
        type: 1,
        level: this.currentStatus,
        parentId: this.currentParentId,
        channelPath: "",
        isShow: "1"
      };
    },
    // 一级栏目列表
    fetchData() {
      this.listLoading = true;
      oneList(this.listQuery).then(response => {
        this.list = response.content.list.list;
        this.total = Number(response.content.list.total);
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      });
    },
    // 三级栏目列表
    fetchThreeData(row) {
      this.currentThreeRow = row;
      this.listQuery = {
        pageNo: 1,
        pageSize: 10
      };
      this.total = 0;
      this.list = [];

      this.listLoading = true;
      this.currentStatus = 3;
      this.currentParentId = row.id;
      let params = {
        pageNo: 1,
        pageSize: 10,
        parentId: row.id
      };
      threeList(params).then(response => {
        this.list = response.content.list.list;
        this.total = Number(response.content.list.total);
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      });
    },
    // 二级栏目列表
    fetchTwoData(row) {
      this.currentTwoRow = row;
      this.listQuery = {
        pageNo: 1,
        pageSize: 10
      };
      this.total = 0;
      this.list = [];
      this.listLoading = true;
      this.currentStatus = 2;
      this.currentParentId = row.id;
      let params = {
        pageNo: 1,
        pageSize: 10,
        parentId: row.id
      };
      twoList(params).then(response => {
        this.list = response.content.list.list;
        this.total = Number(response.content.list.total);
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      });
    },

    // 添加栏目
    createData() {
      create(this.temp).then(() => {
        this.dialogFormVisible = false;
        if (this.currentStatus == 1) {
          this.fetchData();
        } else if (this.currentStatus == 2) {
          this.fetchTwoData(this.currentTwoRow);
        } else if (this.currentStatus == 3) {
          this.fetchThreeData(this.currentThreeRow);
        }
        this.$notify({
          title: "Success",
          message: "添加成功  ",
          type: "success",
          duration: 2000
        });
      });
    },
    // 编辑栏目
    updateData() {
      let params = Object.assign({}, this.temp);
      delete params.createTime;
      delete params.updTime;

      upd(params).then(() => {
        this.dialogFormVisible = false;

        if (this.currentStatus == 1) {
          this.fetchData();
        } else if (this.currentStatus == 2) {
          this.fetchTwoData(this.currentTwoRow);
        } else if (this.currentStatus == 3) {
          this.fetchThreeData(this.currentThreeRow);
        }
        this.$notify({
          title: "Success",
          message: "修改成功",
          type: "success",
          duration: 2000
        });
      });
    },
    // 添加栏目
    handleCreate() {
      this.disableBool = true;
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;

      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row); // copy obj
      this.temp.isShow = String(this.temp.isShow);
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.disableBool = true;
      this.$nextTick(() => {
        this.$refs["dataForm"].clearValidate();
      });
    },
    handleDetail(row) {
      detail({ id: row.id }).then(res => {
        this.temp = Object.assign({}, row); // copy obj
        this.temp.isShow = String(this.temp.isShow);
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
.addBtn {
  margin-bottom: 10px;
}
</style>