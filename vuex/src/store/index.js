import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{        //存放所有组件都可以使用的数据
    username:localStorage.getItem('user'),
    userList:JSON.parse(localStorage.getItem('msg'))
  },
  //同步方法
  mutations:{
    saveUsername(state,value){
        state.username = value
      localStorage.setItem('user',value)
    },
    saveUserList(state,value){
      state.userList = value
      localStorage.setItem('msg',JSON.stringify(value))
    }
  },
  actions:{
    getUserList(ctx){
      return new Promise((res,rej)=>{
        axios.get('/api/userlist')
          .then(data=>{
            ctx.commit('saveUserList',data.data)
            res()
          });
      })
    }
  },
  getters:{
    newlist:(state)=>{
      return state.userList.filter(item=>item.age<30)
    },
    oldlist:(state)=>{
      return state.userList.filter(item=>item.age>30)
    }
  }
})
