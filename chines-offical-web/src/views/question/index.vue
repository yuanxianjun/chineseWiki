<template>
  <div id="question">
    <div class="content border">
      <div class="head">常见问题列表</div>
      <!-- 列表 -->
      <template v-for="item in 5">
        <div class="liCon">
          <div class="label">
            <img class="iconImg" src="@/assets/images/Q.png" />
            请问学术专著协同编辑联合出版平台的出版流程是什么？
          </div>
          <div class="con">
            <img class="iconImg" src="@/assets/images/A.png" />
            学术专著协同编辑联合出版平台主要通过平台搭建，汇聚行业内的专家、作者、出版社等资源，为作者提供文献精准推送、专家指导、增值拓展出版等服务，
            从而实现图书的联合出版，其出版流程为一、注册登录。使用中文知识网账号即可登录无须独立注册；二、填写需求。点击出书选项填写图书出版需求；三、精准推送。
            根据作者出版需求精准推送相关参考文献；四、专家指导。根据出版图书专业领域推荐专家进行指导；五、出版发行。图书完成推荐至平台出版机构进行校审出版。
          </div>
        </div>
      </template>
      <div class="head">我要留言</div>
      <el-form ref="form" :rules="rules" :model="form" label-width="80px">
        <div class="formDivs">
          <div class="formDiv">
            <div class="form-title">请填写您的个人信息</div>
            <div class="form-con">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="性别">
                <el-radio-group v-model="form.sex">
                  <el-radio label="1">男</el-radio>
                  <el-radio label="0">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="联系电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="联系地址" prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
            </div>
          </div>
          <div class="formDiv">
            <div class="form-title">请填写您的个人信息</div>
            <div class="form-con">
              <el-form-item label="留言标题" prop="title">
                <el-input v-model="form.title"></el-input>
              </el-form-item>
              <el-form-item label="留言问题" class="form-message" prop="problem">
                <el-input type="textarea" v-model="form.problem" :rows="5"></el-input>
              </el-form-item>
              <el-form-item label="验证码" class="form-vertical" prop="seccode">
                <el-input v-model="form.seccode"></el-input>

                <div class="seccode" @click="refreshCode">
                  <verify :identifyCode="identifyCode"></verify>
                </div>
              </el-form-item>
            </div>
          </div>
        </div>
        <div class="form-btn">
          <el-button type="primary" @click="onSubmit('form')">提交</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { message } from "@/api/indexPage";
import verify from "@/components/verify.vue";

export default {
  name: "question",
  components: { verify },
  data() {
    return {
      identifyCodes: "123456789ABCDEFGHIN",
      identifyCode: "",
      form: {
        name: "",
        sex: "1",
        phone: "",
        email: "",
        address: "",
        title: "",
        problem: "",
        seccode: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入密码", trigger: "blur" }],
        address: [{ required: true, message: "请输人验证码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        problem: [{ required: true, message: "请输入问题", trigger: "blur" }],
        seccode: [{ required: true, message: "验证码", trigger: "blur" }]
      }
    };
  },
  created() {
    //初始化验证码
    this.refreshCode();
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 验证码
    //验证码abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    // 提交表单
    onSubmit(formName) {
      if (this.identifyCode.toLowerCase() == this.form.seccode) {
        delete this.form.seccode;
        this.$refs[formName].validate(valid => {
          if (valid) {
            // 向后台添加数据;
            message(this.form).then(res => {
              this.$message({
                message: "问题反馈成功",
                type: "success"
              });
            });
          } else {
            return false;
          }
        });
      } else {
        this.form.seccode = "";
        this.$message({
          message: "验证码不正确",
          type: "success"
        });
      }

      this.refreshCode();
    }
  }
};
</script>
<style lang="scss" >
.form-con {
  padding: 20px;
  .el-form-item__content {
    width: 300px;
  }
  .form-message .el-form-item__content {
    width: 400px;
  }
  .form-vertical .el-form-item__content {
    width: 400px;
    .el-input {
      width: 200px;
    }
    .seccode {
      display: inline-block;
      width: 90px;
      height: 36px;
      background: rgba(243, 234, 203, 1);
      vertical-align: middle;
      margin-left: 10px;
    }
  }
}
.form-btn {
  width: 100%;
  height: 160px;
  // display: flex;
  // flex-direction: row;
  // justify-content: flex-end;
  .el-button {
    float: right;
  }
}
</style>
<style lang="scss" scoped>
#question {
  width: 1100px;
  margin: 0 auto;
  .iconImg {
    vertical-align: middle;
    margin-right: 12px;
  }
  .formDivs {
    height: 430px;
    margin: 40px 0px 40px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .formDiv {
    width: 530px;
    height: 422px;
    float: left;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(225, 230, 240, 1);
    .form-title {
      height: 60px;
      background: #ebeffe;
      line-height: 60px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(55, 69, 103, 1);
      text-indent: 20px;
    }
  }
}
.border {
  border-top: 0.5px solid transparent;
}
.head {
  width: 1100px;
  height: 60px;
  display: block;
  background: url(../../assets/images/btbg_year.png) no-repeat center center;
  background-size: 100% 100%;
  margin-top: 40px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(55, 69, 103, 1);
  line-height: 60px;
  text-align: center;
}
.liCon {
  width: 1100px;
  height: 186px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 15px 30px 0px rgba(58, 94, 245, 0.05);
  border-radius: 4px;
  padding: 20px;
  margin-top: 30px;
  .label {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(55, 69, 103, 1);
    line-height: 28px;
    img {
      width: 18px;
      height: 18px;
    }
  }
  .con {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: rgba(122, 139, 166, 1);
    line-height: 28px;
    margin-top: 20px;
  }
}
</style>
