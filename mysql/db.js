/*封装数据库通用api*/
const mysql = require('mysql');

exports.base = (sql,data,callback) => {
	//创建数据库连接
	const connection = mysql.createConnection({
	  host: 'localhost',//数据库所在的服务器的域名或IP地址
	  user: 'root',//用户名称，登录数据库的账号
	  password: '',//密码
	  database: 'mybook'//数据库名称
	});
	//执行连接操作
	connection.connect();
	//操作数据库(异步)
	connection.query(sql,data, function (error, results, fields) {
	  if (error) throw error;
	  callback(results);
	});
	//关闭数据库
	connection.end();
}