<template>
                                            <!--//ref跟submitForm映射-->
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <!--prop="name"用来检验-->
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name: '',
                    author: ''
                },
                rules: {
                    name: [
                        { required: true, message: '图书名字不能为空', trigger: 'blur' },
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    author:[
                        { required: true, message: '作者名字不能为空', trigger: 'blur' },
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this=this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // console.log(_this.ruleForm);
                        axios.post('http://localhost:8181/book/save',_this.ruleForm).then(function (data) {
                            // console.log(data);
                            if(data.data=='success'){
                                // alert('提交成功！');
                                _this.$message({
                                    message: '恭喜你，这是一条成功消息',
                                    type: 'success'
                                });
                                _this.$router.push('/BookManage');
                            }


                        })

                    } else {
                        this.$message.error('错了哦，这是一条错误消息');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>