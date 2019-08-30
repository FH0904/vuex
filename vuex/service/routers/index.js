const express = require('express');
let user =require('../model/user')

let router = express.Router();

router.post('/login',(req,res)=>{
      let reqData = req.body;
      user.findOne({username:reqData.username})
        .then((data)=>{
          if (data){
            if (reqData.password === data.password){

              res.send({code:0,msg:'登录成功!'})
            }else{
              res.send({code:2,msg:'密码错误'})
            }
          }else{
            res.send({code:1,msg:'用户名不存在'})
          }
        })
        .catch(()=>{
            res.send({code:3,msg:'服务器繁忙'})
        })
});

router.post('/regist',(req,res)=>{
  let reqData = req.body;
  user.findOne({username:reqData.username})
    .then((data)=>{
      if (data){
        res.send({code:1,msg:'用户名已存在'})
      }else{
        user.create({
          username: reqData.username,
          password:reqData.password,
          age:~~(Math.random()*20)+20
        })
          .then(()=>{
            res.send({code:0,msg:'注册成功'})
          })

      }
    })
    .catch(()=>{
      res.send({code:2,msg:'服务器繁忙'})
    })
});

router.get('/userlist',(req,res)=>{
    user.find()
      .then(data=>{
        res.send(data)
      })
})


module.exports = router;
