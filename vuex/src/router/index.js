import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import UserCenter from "../components/UserCenter";
import userlist from "../components/userlist";
import olduser from "../components/olduser";
import newuser from "../components/newuser";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Login},
    {
      path: "/usercenter",
      component: UserCenter,
      children:[
        {path:'/userlist',component:userlist},
        {path: '/olduser',component: olduser},
        {path:'/newuser',component:newuser},
        {path:'/usercenter',redirect:"/userlist"}
      ]
    }
  ]
})
