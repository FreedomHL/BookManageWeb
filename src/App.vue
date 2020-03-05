<template>
  <div id="app">
    <template>
      <!--构建整个页面框架-->
      <el-container style="height: 500px; border: 1px solid #eee">
        <!--构建左侧菜单-->
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <!--没有下一行的router就不能跳了-->
          <el-menu router :default-openeds="['0','1']">
            <!--index中要放字符串-->
            <el-submenu  v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
              <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
              <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path" :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
            </el-submenu>
          </el-menu>

        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </template>




        <!--&lt;!&ndash;左侧菜单内容：常用属性  :default-openeds默认打开的菜单 :default-active默认选中的菜单&ndash;&gt;-->
        <!--<el-menu :default-openeds="['1']" :default-active="'1-2'">-->

          <!--&lt;!&ndash;可展开的菜单，常用属性 index：菜单的下标&ndash;&gt;-->
          <!--<el-submenu index="1">-->
            <!--&lt;!&ndash;对应el-submenu的菜单名   i表单设置菜单图标,通过class属性el-icon-message,el-icon-menu,el-icon-setting&ndash;&gt;-->
            <!--<template slot="title"><i class="el-icon-message"></i>导航一</template>-->
            <!--&lt;!&ndash;菜单的子节点，不可再展开，常用属性：index&ndash;&gt;-->
            <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
            <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--<el-submenu index="1-3">-->
              <!--<template slot="title"><i class="el-icon-message"></i>选项3</template>-->
              <!--<el-menu-item index="1-3-1">选项3-1</el-menu-item>-->
              <!--<el-menu-item index="1-3-2">选项3-2</el-menu-item>-->
            <!--</el-submenu>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->

      <!--</el-aside>-->

      <!--<el-container>-->
        <!--<el-header style="text-align: right; font-size: 12px">-->
          <!--<el-dropdown>-->
            <!--<i class="el-icon-setting" style="margin-right: 15px"></i>-->
            <!--<el-dropdown-menu slot="dropdown">-->
              <!--<el-dropdown-item>查看</el-dropdown-item>-->
              <!--<el-dropdown-item>新增</el-dropdown-item>-->
              <!--<el-dropdown-item>删除</el-dropdown-item>-->
            <!--</el-dropdown-menu>-->
          <!--</el-dropdown>-->
          <!--<span>王小虎</span>-->
        <!--</el-header>-->



  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>
