/*新增数据*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/mybook', {useNewUrlParser: true});
//设计文档结构(表结构)
const bookSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	author: {
		type: String
	},
	category: {
		type: String
	},
	description: {
		type: String
	}
})
const Book = mongoose.model('Book', bookSchema)
new Book({
	name: '西游记',
	author: '吴承恩'
}).save()
// Book.find((err,result)=>{
// 	//res.json(result);
// 	if (err) {
// 		console.log(err)
// 	}else{
// 		console.log((result))
// 	}
// });
// Book.findById("5e148d3e266bda23c0709917",(err,result)=>{
// 		console.log((result))
// 	});
//返回模型构造函数
exports.Book = Book;
