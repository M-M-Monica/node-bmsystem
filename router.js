/*路由模块*/
const express = require('express');
const router = express.Router();
/*使用mysql*/
const service = require('./mysql/service.js');
/*使用mongodb*/
//const service = require('./mongodb/service.js');

/*路由处理*/
//提供所有图书信息
router.get('/books',service.allBooks);
//添加图书（提交表单）
router.post('/books/book',service.addBook);
//编辑图书时根据id查询相应信息
router.get('/books/book/:id',service.getBookById);
//提交编辑数据
router.put('/books/book',service.editBook);
//删除图书信息
router.delete('/books/book/:id',service.deleteBook);

module.exports = router;