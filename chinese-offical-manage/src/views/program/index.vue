<template>
  <div class="app-container">
    <div class="addBtn">
      <el-button type="success" @click="handleCreate()">添加菜单</el-button>
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
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>

      <el-table-column label="级别" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.level }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="是否显示" width="110" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.isShow | statusFilter}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="tabId" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.tabId }}</span>
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

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="70px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item v-if="dialogStatus=='update' || !disableBool" label="ID" prop="id">
          <el-input v-model="temp.id" disabled />
        </el-form-item>
        <el-form-item v-if="dialogStatus=='update' || !disableBool" label="父ID" prop="parentId">
          <el-input v-model="temp.parentId" disabled />
        </el-form-item>

        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>

        <el-form-item label="tabID" prop="tabId">
          <el-input v-model="temp.tabId" />
        </el-form-item>

        <el-form-item label="等级" prop="type">
          <el-select v-model="temp.level" class="filter-item" placeholder="请选择">
            <el-option
              v-for="item in levellist"
              :key="item.key"
              :label="item.display_name"
              :value="item.key"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="显示" prop="isShow">
          <el-radio v-model="temp.isShow" label="1">是</el-radio>
          <el-radio v-model="temp.isShow" label="0">否</el-radio>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="temp.sort" placeholder="请输入排序值"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="disableBool">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">确认</el-button>
      </div>
    </el-dialog>

    <!-- <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
      </span>
    </el-dialog>-->
  </div>
</template>

<script>
import { getList, createMenu, delMenu, updMenu, detail } from "@/api/menu";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: "是",
        0: "否"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      disableBool: true,
      levellist: [
        {
          key: 1,
          display_name: "第一级"
        },
        {
          key: 2,
          display_name: "第二级"
        },
        {
          key: 3,
          display_name: "第三级"
        },
        {
          key: 4,
          display_name: "第四级"
        },
        {
          key: 5,
          display_name: "第五级"
        }
      ],
      textMap: {
        update: "编辑菜单",
        create: "添加菜单"
      },
      dialogFormVisible: false,
      dialogStatus: "",
      temp: {
        name: "",
        level: 1,
        isShow: "1",
        sort: 1,
        tabId: ""
      },
      rules: {
        sort: [{ required: true, message: "排序是必填的", trigger: "blur" }],
        level: [{ required: true, message: "级别是必选的", trigger: "change" }],
        name: [{ required: true, message: "名称是必填的", trigger: "blur" }],
        tabId: [{ required: true, message: "tabId是必填的", trigger: "blur" }]
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    resetTemp() {
      this.temp = {
        name: "",
        tabId: "",
        isShow: "1",
        level: 1,
        sort: 1
      };
    },
    // 添加菜单
    createData() {
      createMenu(this.temp).then(() => {
        this.dialogFormVisible = false;
        this.fetchData();
        this.$notify({
          title: "Success",
          message: "添加成功  ",
          type: "success",
          duration: 2000
        });
      });
    },
    // 编辑菜单
    updateData() {
      updMenu(this.temp).then(() => {
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
    // 添加菜单
    handleCreate() {
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
          delMenu({ id: row.id }).then(() => {
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
    },
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response.content.list;
        this.listLoading = false;
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
