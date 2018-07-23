const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1', // 数据库的IP
    user: 'root', // 登录数据库的名称
    password: 'root', // 登录密码
    database: 'data' // 操作哪个数据库
})

// let input = {
//     name:'西部世界2',
//     url:'http://zmz003.com/F2wih3'
// }

// var sql = 'insert into list set ?'
// connection.query(sql,input,(err,results)=>{
//     console.log(results);
    
// })

module.exports = {
    addInfo(info,callback){    
        console.log(info);
            
        var sql = 'insert into list set ?'
        connection.query(sql, info, callback)
    }
}
