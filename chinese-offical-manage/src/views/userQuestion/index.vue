<template>
  <div class="app-container">
   
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
       <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="标题" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>

      <el-table-column label="问题" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.problem }}</span>
        </template>
      </el-table-column>
     
           <el-table-column align="center" prop="created_at" label="电话" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.phone}}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | toLolcalTime}}</span>
           
        </template>
      </el-table-column>




      <el-table-column align="center" prop="created_at" label="操作" width="300">
       <template slot-scope="scope">             
              <el-button type="success" size="mini" @click="handleDetail(scope.row)">
                详情
              </el-button>
       </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
    
    <el-dialog title="查看详情" :visible.sync="dialogFormVisible">

      <el-form ref="dataForm"      :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">

         <el-form-item label="ID" prop="id">
          <span>{{temp.id}}</span>
        </el-form-item>
       
        <el-form-item label="姓名:" prop="name">
          <span>{{temp.name}}</span>
        </el-form-item>

         <el-form-item label="性别:" prop="sex">
          <span >{{temp.sex | sexReplace}}</span>
        </el-form-item>

                <el-form-item label="电话:" prop="phone">
          <span>{{temp.phone}}</span>
        </el-form-item>
                 <el-form-item label="邮箱:" prop="email">
          <span>{{temp.email}}</span>
        </el-form-item>
                         <el-form-item label="地址:" prop="address">
          <span>{{temp.address}}</span>
        </el-form-item>

         <el-form-item label="标题:" prop="title">
          <span>{{temp.title}}</span>
        </el-form-item>
                 <el-form-item class="y-formClass" label="问题:" prop="problem">
          <span>{{temp.problem}}</span>
        </el-form-item>
 

         

      <el-form-item label="创建时间" prop="createTime">
          <span>{{temp.createTime |  toLolcalTime}}</span>
        </el-form-item>
      </el-form>



      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          关闭
        </el-button>
       
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
} from '@/api/userQuestion'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name:"userQuestions",
   components: { Pagination },
  filters: {
    sexReplace(sex) {
      const sexs = {
        1: '男',
        0: '女',
      }
      return sexs[sex]
    },
    // 转换时间
   toLolcalTime(time){
     let a = new Date(time)
      return a.toLocaleString();
   },
  },
  data() {
    return {
      total: 0,
      listLoading: true,
       listQuery: {
        pageNo: 1,
        pageSize: 20,
        type:1,
      },
      list: null,
      listLoading: true,
      disableBool:true,  
       dialogFormVisible: false,
       temp: {},

    }
  },
  created() {
    this.fetchData()
  },

  methods: {

    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {

        this.list = response.content.list.list
        this.total =  Number(response.content.list.total)
        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        },  300)
      })
    },
    handleDetail(row) {
      detail({id:row.id}).then((res)=>{
         this.temp = Object.assign({}, row) // copy obj
        this.temp.isShow = String(this.temp.isShow)
         this.disableBool = false;
        this.dialogFormVisible  = true;
      })
    },

   
  }
}
</script>
<style lang="scss" scoped>
.el-dialog__body .el-form-item__content{
border: 1px solid #eee !important;
border-radius: 5px;
}
.y-formClass .el-form-item__content{
  border: 1px solid #eee !important;
  border-radius: 5px !important;
}
</style>