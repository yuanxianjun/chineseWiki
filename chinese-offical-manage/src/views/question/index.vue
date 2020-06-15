<template>
  <div class="app-container">
    <div class="addBtn">
      <el-button  type="success" @click="handleCreate()">
                添加常见问题
      </el-button>
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
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="问题" align="center">
        <template slot-scope="scope">
          {{ scope.row.question }}
        </template>
      </el-table-column>

      <el-table-column label="回答" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.answer }}</span>
        </template>
      </el-table-column>
     
      <el-table-column class-name="status-col" label="创建时间" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | toLolcalTime}}</span>
           
        </template>
      </el-table-column>


      
      <el-table-column align="center" prop="created_at" label="操作" width="300">
       <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">
                编辑
              </el-button>
              <el-button type="success" size="mini" @click="handleDetail(scope.row)">
                详情
              </el-button>
              <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleDelete(scope.row)">
                删除
              </el-button>
       </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />
    
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">

      <el-form ref="dataForm"     :rules="rules" :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">

         <el-form-item v-if="dialogStatus=='update' || !disableBool" label="ID" prop="id">
          <el-input type= "textarea" v-model="temp.id" disabled />
        </el-form-item>
       
        <el-form-item label="问题" prop="name">
          <el-input  type="textarea"   v-model="temp.question" />
        </el-form-item>

           <el-form-item  label="回答" prop="linkUrl">
          <el-input  type="textarea" v-model="temp.answer"  />
        </el-form-item>

          <el-form-item v-if="dialogStatus=='update' || !disableBool" label="创建时间" prop="createTime">
            <span>{{temp.createTime |  toLolcalTime}}</span>
          </el-form-item>
         
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="disableBool">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确认
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
} from '@/api/question'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name:"links",
   components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: '常见问题',
        2: '合作伙伴',
        3: '其他类目',
        
      }
      return statusMap[status]
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
         type:1,//类型 1常见问题 2 合作伙伴 3 其它类目
       
      },
      list: null,
      listLoading: true,
       disableBool:true,  
      typeList:[
        {
        key:1,display_name:"常见问题"
        },
        {
          key:2,display_name:"合作伙伴"
        },
        {
          key:3,display_name:"其他类目"
        },
       

       ],
      textMap: {
        update: '编辑常见问题',
        create: '添加常见问题'
      },
       dialogFormVisible: false,
      dialogStatus: '',
       temp: {
        name:"",     
        type: 1,
          linkUrl: "1",
        
      },
       rules: {
      
        name: [{ required: true, message: '问题是必填的', trigger: 'blur' }],
        linkUrl: [{ required: true, message: '答案是必填的', trigger: 'blur' }]
      },
    }
  },
  created() {
    this.fetchData()
  },

  methods: {
    
   resetTemp() {
      this.temp = {
        name: '',
        type:1,
       linkUrl:""
      }
    },
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
    // 添加常见问题
    createData(){
         create(this.temp).then(() => {

            this.dialogFormVisible = false
            this.fetchData();
            this.$notify({
              title: 'Success',
              message: '添加成功  ',
              type: 'success',
              duration: 2000
            })
          })
    },
    // 编辑常见问题
    updateData(){
       upd(this.temp).then(() => {
         this.dialogFormVisible = false;
         this.fetchData();
            this.$notify({
              title: 'Success',
              message: '修改成功',
              type: 'success',
              duration: 2000
            })
           })
    },
    // 添加常见问题
    handleCreate() {
      this.disableBool= true;
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.isShow = String(this.temp.isShow)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
     
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    handleDetail(row) {
      detail({id:row.id}).then((res)=>{
         this.temp = Object.assign({}, row) // copy obj
        this.temp.isShow = String(this.temp.isShow)
         this.disableBool = false;
        this.dialogFormVisible  = true;
      })
    },
      handleDelete(row) {
      del({id:row.id}).then(()=>{
          this.fetchData();
          this.$notify({
          message: '删除成功 ',
          type: 'success',
          duration:2000
        })
      })
    },
   
  }
}
</script>
<style lang="scss" scoped>
.addBtn {
  margin-bottom: 10px;
}
</style>