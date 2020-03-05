<!--<template>-->
    <!--<h1>这是页面1</h1>-->
<!--</template>-->

<!--<script>-->
    <!--export default {-->
        <!--name: "PageOne"-->
    <!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
    <div>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                prop="id"
                label="编号"
                width="150">
        </el-table-column>
        <el-table-column
                fixed
                prop="name"
                label="图书名"
                width="120">
        </el-table-column>
        <el-table-column
                fixed
                prop="author"
                label="作者"
                width="120">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
                <el-button type="text" size="small" @click="deleteBook(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pageSize"
            :total="total"
            @current-change="page">
    </el-pagination>
    </div>
</template>

<script>
    export default {
        methods: {
            edit(row) {
                this.$router.push({
                    path:'/update',
                    query:{
                        id:row.id
                    }
                })
            },
            page(currentPage){
                console.log(currentPage);
                // axios.get('http://localhost:8181/book/findAll/',{
                //     page:currentPage,
                //     size:3
                // })
                //     .then((data)=> {
                //         this.tableData=data.data;
                //     })
                axios.get('http://localhost:8181/book/findAll/'+(currentPage-1)+'/'+this.pageSize)
                    .then((data)=> {
                        //console.log(data);
                        this.tableData=data.data.content;
                        this.pageSize=data.data.size;
                        this.total=data.data.totalElements;
                    })
            },
            deleteBook(row){
                const _this=this;
                axios.delete('http://localhost:8181/book/deleteById/'+row.id).then(function (res) {
                    _this.$alert('《'+row.name+'》删除成功！', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            // _this.$router.push('/BookManage')
                            window.location.reload();
                        }
                    });

                })
            }
        },

        data() {
            return {
                pageSize:0,
                total:11,
                tableData: [{
                    id: '1',
                    name: '解忧杂货店1',
                    author: '东野圭吾1'

                }, {
                    id: '2',
                    name: '解忧杂货店2',
                    author: '卡勒德·胡赛11212121尼'
                }, {
                    id: '3',
                    name: '解忧杂货店3',
                    author: '东野圭吾3'
                }]
            }
        },
        created() {

            axios.get('http://localhost:8181/book/findAll/0/3')
                .then((data)=> {
                    // console.log(data);
                    this.tableData=data.data.content;
                    this.pageSize=data.data.size;
                    this.total=data.data.totalElements;
                })
        }
    }
</script>