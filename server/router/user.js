
const express = require('express');
const Router = express.Router(); // function(){}


const db = require('../db')
const token = require('../utils/token')


// 获取所有用户
Router.get('/',(req,res)=>{
    res.send('所有用户')
})



// 注册：添加一个用户
Router.post('/',async (req,res)=>{
    // 获取username,password
    const {username,password,vcode} = req.body;
    console.log('vcode=',vcode,req.session.vcode);

    if(vcode.toLowerCase() === req.session.vcode){

        // 写入数据库
        try{
            await db.create('user',{username,password,regtime:new Date()})
            console.log('user=',username,password)
            res.send({
                code:200
            })
    
        }catch(err){
            console.log('err=',err)
            res.send({
                code:400
            })
        }

        delete req.session.vcode;
    }else{
        res.send({
            code:401
        })
    }


})

// 登录
Router.post('/login',async (req,res)=>{
    const {username,password} = req.body;

    // 查询数据库，如果得到数据说明用户名和密码正确
    // 反之，查询不到数据，则表示用户名和密码错误
    const result = await db.find('user',{username,password})

    if(result.length > 0){
        // 生成一个token，并返回给前端
        const authorization = token.create({username})
        res.send({
            code:200,
            data:{
                authorization
            }
        })
    }else{
        res.send({
            code:400
        })
    }
})

// 校验令牌
Router.get('/verify',async (req,res)=>{
    const {authorization} = req.query;

    const result = token.verify(authorization);
    if(result){
        res.send({
            code:200
        })
    }else{
        res.send({
            code:400
        })
    }
})

// 获取某一个用户的信息
Router.get('/:id',(req,res)=>{
    // 获取id值
    // const id = req.query
    const {id} = req.params
    res.send(`id为${id}的用户`)
})

module.exports = Router