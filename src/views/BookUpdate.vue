<template>
    <el-form style="width: 60%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="图书编号">
            <el-input v-model="ruleForm.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="图书名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<<script>
    export default {
        data() {
            return {
                ruleForm: {
                    id:'',
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
                        axios.put('http://localhost:8181/book/update',_this.ruleForm).then(function (data) {
                            // console.log(data);
                            if(data.data=='success'){
                                // alert('提交成功！');
                                _this.$message({
                                    message: '修改成功！',
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
        },created() {
            // console.log(this.$route.query.id);
            const _this=this;
            axios.get('http://localhost:8181/book/findById/'+this.$route.query.id).then(function (res) {
                _this.ruleForm=res.data;
            })
        }
    }
</script>

