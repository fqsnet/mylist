const express = require('express')
const router = express.Router()

router.get('/list',(req,res)=>{
    res.render('list',{})
})
router.post('/list',(req,res)=>{
    console.log(111);
    
})
module.exports = router