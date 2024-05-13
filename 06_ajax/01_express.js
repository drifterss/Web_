const express = require('express')

const app = express()

// 导入 cors 中间件，实现跨域
const cors = require('cors')

app.use(cors())


app.get('/',(req, res)=>{
    res.send('你好啊')
})


app.listen('8081',()=>{
    console.log('server is running...');
})