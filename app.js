const express = require('express')
const router = require('./router.js')
const bodyParser = require('body-parser')

const app = express()

//加载静态资源
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

/*处理请求参数*/
//挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({extended: false}))

//配置模板引擎
app.engine('art',require('express-art-template'))
//app.set('views', './public/')

//配置路由
app.use(router)

/*启动服务器功能*/
app.listen(8000,function(){
	console.log('8000running')
})

// app.get('/',function(req,res){
// fs.readFile('./db.json','utf8',function (err, data) {
// 		if (err) {
// 			return res.status(500).send('error')
// 		}
// 		res.render('index.html', {
// 			students: JSON.parse(data).students
// 		})
// 	})
// })
// app.get('/',function(req,res){	
// 	res.render('index.html', {
// 		students: [
// 		{"id": 1, "name": "李斯", "author": 0, "category":18, "description": "游泳、唱歌、篮球"},
// 		{"id": 2, "name": "李斯", "author": 0, "category":18, "description": "游泳、唱歌、篮球"},
// 		{"id": 3, "name": "李斯", "author": 0, "category":18, "description": "游泳、唱歌、篮球"},
// 		{"id": 4, "name": "李斯", "author": 0, "category":18, "description": "游泳、唱歌、篮球"},
// 		{"id": 5, "name": "李斯", "author": 0, "category":18, "description": "游泳、唱歌、篮球"},
// 		{"id": 6, "name": "李斯", "author": 0, "category":18, "description": "游泳、唱歌、篮球"}
// 	]
// 	})
// })