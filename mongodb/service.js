/*业务模块*/
const Book = require('./db.js');

//返回所有图书信息
exports.allBooks = (req,res) => {
	Book.find((err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});		
};
//添加图书保存数据
exports.addBook = (req,res) => {
	let info = req.body;
	new Book(info).save((err,result)=>{
		if(err){
			res.send({flag:2});
		}else{
			res.send({flag:1});
		}
	});
};
//跳转到编辑图书页面
exports.getBookById = (req,res) => {
	let id = req.params.id;
	let data = [id];
	Book.findById(data,(err,result)=>{
		if(err){
			console.log(err);
		}else{
			res.send(result);
		}
	});
};
//编辑图书
exports.editBook = (req,res) => {
	let info = req.body;
	Book.findByIdAndUpdate(info.id,info,(err,result)=>{
		if(err){
			res.send({flag:2});
		}else{
			res.send({flag:1});
		}
	});
};
//删除图书
exports.deleteBook = (req,res) => {
	let id = req.params.id;
	let data = [id];
	Book.findByIdAndRemove(data, (err,result) => {
		if(err){
			res.send({flag:2});
		}else{
			res.send({flag:1});
		}
	});
};