/*业务模块*/
const dbmon = require('./dbmon.js');

//返回所有图书信息
exports.allBooks = (req,res) => {
	dbmon.Book.find((err,result)=>{
		res.send(result);
	});
};
//添加图书保存数据
// exports.addBook = (req,res) => {
// 	let info = req.body;
// 	new Book(info).save((result)=>{
// 		if(result.affectedRows == 1){
// 			res.json({flag:1});
// 		}else{
// 			res.json({flag:2});
// 		}
// 	});
// };
//跳转到编辑图书页面
exports.getBookById = (req,res) => {
	//拼接字符串传
	let id = req.params.id;
	dbmon.Book.findById(`${'+id+'}`,(err,result)=>{
		res.send(result);
	});
	//变成字符串再传
	// let id = JSON.stringify(req.params.id)
	// dbmon.Book.findById(id,(err,result)=>{
	// 	res.send(result);
	// });
};
//编辑图书
exports.editBook = (req,res) => {
	let info = req.body;
	let id = req.params.id;
	console.log(info)
	//let data = [info.name,info.author,info.category,info.description,info.id];
	dbmon.Book.findByIdAndUpdate(`${'+id+'}`,info,(err,result)=>{
		if(err){
			res.send({flag:2});
		}else{
			res.send({flag:1});
		}
	});
};
// //删除图书
// exports.deleteBook = (req,res) => {
// 	let id = req.params.id;
// 	//let data = [id];
// 	Book.findByIdAndRemove(id,info,(result)=>{
// 		if(result.affectedRows == 1){
// 			res.json({flag:1});
// 		}else{
// 			res.json({flag:2});
// 		}
// 	});
// };