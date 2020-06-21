const express = require('express')
const router = require('./router.js')
const bodyParser = require('body-parser')
const app = express()

//加载静态资源
app.use(express.static('public'))

//挂载post参数处理中间件
app.use(bodyParser.urlencoded({extended: false}))

//配置路由
app.use(router)

/*启动服务器功能*/
app.listen(8000,function(){
	console.log('8000running')
})