<template>
  <div class="app-container">
    <div class="addBtn">
      <el-button  type="success" @click="handleCreate()">
                添加轮播图
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
      
      <el-table-column label="图片" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.bannerUrl+ scope.row.bannerPath" >
          
        </template>
      </el-table-column>

      <el-table-column label="描述" align="center">
        <template slot-scope="scope">
          {{ scope.row.bannerContent }}
        </template>
      </el-table-column>

      <el-table-column label="地址" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.bannerPath }}</span>
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
          <el-input v-model="temp.id" disabled />
        </el-form-item>
       
        <el-form-item label="地址" prop="name">
          <el-input type="textarea" v-model="temp.bannerPath" disabled="" />
        </el-form-item>

           <el-form-item  label="图片" prop="bannerUrl">
          <!-- <el-input v-model="temp.bannerUrl"  /> -->

          <!-- multiple 能够多选的选项-->
          <el-upload
          v-if="disableBool"
                class="upload-demo"
                :action="actionUrl"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="uploadSuccess"
                :before-remove="beforeRemove"
                :on-exceed="handleExceed"
                :file-list="fileList"
                :limit="1"
                >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <img  v-if="!disableBool" :src="temp.bannerUrl+temp.bannerPath" >
        </el-form-item>

        <el-form-item label="描述" prop="bannerContent">
             <el-input type="textarea" v-model="temp.bannerContent"  />
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
} from '@/api/carousel'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name:"carousel",
   components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        1: '轮播图',
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
      actionUrl:process.env.VUE_APP_BASE_API + 'sys/common/upload',
       fileList:[],
      total: 0,
      listLoading: true,
       listQuery: {
        pageNo: 1,
        pageSize: 20,
        type:1,//类型 1轮播图 2 合作伙伴 3 其它类目
      },
      list: null,
      listLoading: true,
     disableBool:true,  
   
      textMap: {
        update: '编辑轮播图',
        create: '添加轮播图'
      },
       dialogFormVisible: false,
      dialogStatus: '',
       temp: {
        bannerContent: "",
        bannerPath: "",
        bannerUrl: "",
      },
       rules: {
        bannerContent:[{ required: true, message: '请填写描述', trigger: 'blur' }],
        bannerPath: [{ required: true, message: '名称是必填的', trigger: 'blur' }],
        bannerUrl: [{ required: true, message: '请选择图片', trigger: 'blur' }]
      },
    }
  },
  created() {
  
    this.fetchData()
  },

  methods: {
    uploadSuccess(res,fileList){
        this.temp.bannerPath = res.content.path;
        this.temp.bannerUrl =  res.content.url;
    },
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
   resetTemp() {
      this.temp = {
        bannerContent: "",
        bannerPath: "",
        bannerUrl: "",
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
    // 添加轮播图
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
    // 编辑轮播图
    updateData(){
      var params ={
        id:this.temp.id,
        bannerPath:this.temp.bannerPath,
        bannerUrl:this.temp.bannerUrl,
        bannerContent:this.temp.bannerContent
      }
       upd(params).then(() => {
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
    // 添加轮播图
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
     
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.disableBool = true;
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