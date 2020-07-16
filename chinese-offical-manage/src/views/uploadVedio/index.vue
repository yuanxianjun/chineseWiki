<template>
  <div class="app-container">
    <template v-if="list && list.length < 1 || isEdit">
      <el-form style="width:26%" label-position="left" label-width="80px" :model="temp">
        <el-form-item label="标题">
          <el-input v-model="temp.title"></el-input>
        </el-form-item>
        <el-form-item label="视频">
          <el-upload class="upload-demo" drag :action="actionUrl" :on-success="uploadSuccess">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              <em>点击上传视频</em>
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="btn-footer">
        <el-button type="primary" @click="createData" v-if="isEdit == false">创建</el-button>
        <el-button type="primary" @click="updateData" v-if="isEdit">更新</el-button>
        <el-button @click="resetTemp">取消</el-button>
      </div>
    </template>
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
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>
      <el-table-column label="视频链接" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.videoUrl }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="300">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button
            v-if="scope.row.status!='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList, create, del, upd, detail } from "@/api/video";

export default {
  name: "uploadVedio",
  components: {},
  filters: {},
  data() {
    return {
      isEdit: false,
      actionUrl: process.env.VUE_APP_BASE_API + "sys/common/upload",
      listLoading: false,
      listQuery: {
        pageNo: 0,
        pageSize: 1
      },
      list: null,
      temp: {
        title: "",
        videoUrl: ""
      }
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    resetTemp() {
      this.isEdit = false;
      this.temp = {
        title: "",
        videoUrl: ""
      };
    },
    // 添加视频
    createData() {
      if (this.temp.videoUrl) {
        create(this.temp).then(() => {
          this.fetchData();
          this.$notify({
            title: "Success",
            message: "数据录入成功",
            type: "success",
            duration: 2000
          });
          this.resetTemp();
        });
      } else {
        this.$notify({
          title: "Success",
          message: "请等待上传完成  ",
          type: "success",
          duration: 2000
        });
      }
    },
    uploadSuccess(res, fileList) {
      this.temp.videoUrl = res.content.url + res.content.path;
    },
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = response.content.list.list;

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      });
    },
    // form表单提交编辑的内容
    updateData() {
      delete this.temp.createTime;
      delete this.temp.updTime;
      upd(this.temp).then(() => {
        this.fetchData();
        this.isEdit = true;
        this.$notify({
          title: "Success",
          message: "修改成功",
          type: "success",
          duration: 2000
        });
      });
    },
    // 将该条的内容展示在form中
    handleUpdate(row) {
      this.isEdit = true;
      this.temp = Object.assign({}, row); // copy obj
    },
    // 删除该条内容
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
.nameDiv {
  display: flex;
  flex-direction: row;
}
.btn-footer {
  padding-left: 80px;
}
.el-table {
  margin-top: 20px;
}
</style>