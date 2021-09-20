<template>
    <div class="login_wrap">
        <div class="login-center">
            <div class="title">
                登录
            </div>
            <el-form
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                label-position="left"
                class="demo-ruleForm"
            >
                <el-form-item
                    label="用户名"
                    prop="name"
                >
                    <el-input v-model="ruleForm.name" />
                </el-form-item>
                <el-form-item
                    label="密码"
                    prop="password"
                >
                    <el-input
                        v-model="ruleForm.password"
                        type="password"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="submitForm"
                    >
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: null
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        {
                            min: 0, max: 60, message: '长度在 60个字符', trigger: 'blur'
                        }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        {
                            min: 0, max: 60, message: '长度在 60个字符', trigger: 'blur'
                        }
                    ]
                }
            };
        },
        methods: {
            submitForm() {
                this.$refs.ruleForm.validate(async (valid) => {
                    if (valid) {
                        this.$store.dispatch('setting/login', this.ruleForm).then(res => {
                            if (res.code === 200) {
                                this.$router.push({
                                    path: '/editor'
                                });
                            }
                        });
                    } else {
                        return false;
                    }
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
.login_wrap {
   width: 100%;
   height: 100vh;
   background: url('../../assets/img/login.png');
   background-size: cover;
   display: flex;
   justify-content: center;
   .title {
        padding: 10px 0 20px;
        font-size: 20px;
        color: #545454;
        text-align: center;
        margin-bottom: 30px;
   }
   .login-center {
       margin-top: 100px;
       width: 500px;
       height: 253px;
       padding: 20px 50px 50px;
       background: #fff;
        /deep/ .el-form-item__content {
            .el-button--primary {
                width: 100%;
            }
        }
    }
}
</style>
