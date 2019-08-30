<template>
    <div id="login">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

    <script>
        export default {
            data() {
                return {
                    ruleForm: {
                        username: '',
                        password: '',
                    },
                    rules: {
                        username: [
                            { required: true, message: '请输入用户名', trigger: 'blur' },
                            { min: 2, max:12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
                        ],
                        password: [
                            { required: true, message: '请输入密码', trigger: 'blur' },
                            { min: 2, max: 16, message: '长度在 2 到 16 个字符', trigger: 'blur' }
                        ]
                    }
                };
            },
            methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.axios.post('/api/login',{
                                username:`${this.ruleForm.username}`,
                                password:`${this.ruleForm.password}`
                            })
                                .then((data)=>{
                                    if (data.data.code){
                                        this.$message.error(data.data.msg);
                                    }else{
                                        this.$message({
                                            message: data.data.msg,
                                            type: 'success'
                                        });
                                        this.$router.push({
                                            path:'/usercenter'
                                        });
                                        this.$store.commit('saveUsername',this.ruleForm.username)
                                    }
                                })
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                },
                resetForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            this.axios.post('/api/regist',{
                                username:`${this.ruleForm.username}`,
                                password:`${this.ruleForm.password}`
                            })
                                .then((data)=>{
                                    if (data.data.code){
                                        this.$message.error(data.data.msg);
                                    }else{
                                        this.$message({
                                            message: data.data.msg,
                                            type: 'success'
                                        });
                                    }
                                })
                        } else {
                            console.log('error submit!!');
                            return false;
                        }
                    });
                }
            }
        }
</script>

<style scoped>
  #login {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    height: 250px;
    padding: 20px 30px 40px 0px;
    margin: auto;
    box-shadow: 0 0 10px 0 blue;
  }

  #login h3 {
    font-size: 28px;
    text-align: center;
    line-height: 70px;
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
