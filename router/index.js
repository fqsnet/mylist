const express = require('express')
const router = express.Router()
const model = require('../model/mysql')
router.get('/',(req,res)=>{
    res.render('index', {})
})




router.post('/add',(req,res)=>{
    // res.render('index', {})
    console.log(req.body);
    
    model.addInfo(req.body,(err,results)=>{
        if (err) res.json({ err_code: 1, msg: '添加失败！' })

        res.json({ err_code: 0, msg: 'ok', list: results })
        
    })
})
module.exports = router
