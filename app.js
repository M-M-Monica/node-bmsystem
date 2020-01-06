const express = require('express')
const router = require('./router.js')
const bodyParser = require('body-parser')

const app = express()

//加载静态资源
app.use('/node_modules/',express.static('./node_modules/'))
app.use(express.static('public'))

/*处理请求参数*/
//挂载post参数处理中间件
app.use(bodyParser.urlencoded({extended: false}))

/*node配置模板引擎安装art-template，express-art-template,不需要引入art-template但express-art-template会用到*/
//app.engine('art',require('express-art-template'))
//app.set('views', './public/')

//配置路由
app.use(router)

/*启动服务器功能*/
app.listen(8000,function(){
	console.log('8000running')
})