<template>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="_id" label="用户id" ></el-table-column>
      <el-table-column prop="username" label="用户名" ></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
  </el-card>

</template>

<script>
  import {mapState,mapActions} from 'vuex'
    export default {
        name: "userlist",
        data() {
            return {
                tableData: []
            }
        },
        created() {
            // this.$store.dispatch('getUserList')
            //     .then(()=>{
            //         // this.tableData = this.$store.state.userList
            //         this.tableData = this.userList
            //     })
            this.getUserList()
                .then(()=>{
                    // this.tableData = this.$store.state.userList
                    this.tableData = this.userList
                })
        },
        computed:{
            ...mapState(["userList"])
        },
        methods:{
            ...mapActions(['getUserList'])
        }

    }
</script>

<style scoped>

</style>
