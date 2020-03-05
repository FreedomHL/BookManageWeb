<template>
    <div>
        <table>
            <tr>
                <td>编号</td>
                <td>图书名称</td>
                <td>作者</td>
            </tr>
            <tr :key="item.id" v-for="item in books">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.author}}</td>
            </tr>
        </table>

    </div>
</template>

<script>
    export default {
        name: "Book",
        data(){
            return{
                msg:'HelloVue',
                books:[
                    {
                        id:1,
                        name:'java零基础实战',
                        author:'张三'
                    },
                    {
                        id:2,
                        name:'Vue零基础实战',
                        author:'李四'
                    },
                    {
                        id:3,
                        name:'SpringBoot零基础实战',
                        author:'王五'
                    }
                ]
            }
        },
        created() {
            axios.get('http://localhost:8181/book/findAll')
                .then((data)=> {
                    this.books=data.data;
                })
        }
        // },
        // mounted() {
        //
        // }
    }
</script>

<style scoped>

</style>