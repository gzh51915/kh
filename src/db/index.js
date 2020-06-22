const express = require('express');

// 使用express中间件Router来实现server与router的连接
const Router = express.Router()

const db = require('../db')

// 查询所有商品 /goods/
Router.get('/', async (req, res) => {
    const { page = 1, size = 15, sort = { product_id: 1 } } = req.query;
    const limit = size * 1;
    const skip = (page - 1) * size;

    let result
    let data;
    try {
        result = await db.find('list', {}, { limit, skip, sort })
        data = {
            code: 1,
            data: result,
            msg: 'success',

        }
    } catch (err) {
        console.log(error);
        data = {
            code: 0,
            data: [],
            msg: 'fail'
        }
    }
    // 请求<->响应
    res.send(data)


})
Router.post('/', (req, res) => { //增
    // db.create('goods')
})

// 获取库存数量
Router.get('/kucun', (req, res) => {
    res.send({
        code: 1,
        data: 4,
        msg: 'success'
    })
})

// 查询id为某个值的商品
Router.get('/:id', async (req, res) => {
    const { id } = req.params;
    if (id === "all-e0") {
        move = {}
    } else if (id === "all-e1") {
        move = {productTypeName : "跟团游"}
    } else if (id === "all-e2") {
        move = {productTypeName : "自由行"}
    } else if (id === "all-e3") {
        mobe = {destinationSingleCity : "广州"}
    } else {
        move = { _id: id }
    }
    const result = await db.find('list', move);
    if (result.length > 0) {
        res.send({
            code: 1,
            data: result,
            msg: 'success',
            name: req.params
        })
    } else {
        res.send({
            code: 0,
            data: [],
            msg: 'fail',
            name: req.params
        })
    }
})


module.exports = Router

