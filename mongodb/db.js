/*新增数据*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//连接MongoDB数据库，端口默认27017可以不写
//后面的是新建的数据库名，写出来它就自动建好，库下面是集合(也就是mysql中的表)，
mongoose.connect('mongodb://localhost:27017/mybook', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});
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
const Book = mongoose.model('Book', bookSchema);

const booksList = [
	{
		"name": "了不起的盖茨比",
	  "author":"弗·司各特·菲茨杰拉德",
	  "category": "文学",
	  "description":"中西部小子盖茨比到东部闯荡一夕致富，他在自己的豪宅夜夜宴客，俨然慷慨荒唐的富豪大亨；他梦幻地看着纽约长岛上一座闪着绿光的灯塔，寻觅着梦寐以求的女人黛西。"
	},
	{
		"name": "活着",
	  "author":"余华",
	  "category": "文学",
	  "description":"讲述了农村人福贵悲惨的人生遭遇。"
	},
	{
		"name": "果壳中的宇宙",
	  "author":"史蒂芬·霍金",
	  "category": "科学",
	  "description":"霍金把读者带到理论物理的最前沿，真理在那里甚至比幻想更令人眼花缭乱。他利用通俗的语言解释制约着宇宙的原理。"
	},
	{
		"name": "时间简史",
	  "author":"史蒂芬·霍金",
	  "category": "科学",
	  "description":"《时间简史》讲述是探索时间和空间核心秘密的故事，是关于宇宙本性的最前沿知识，包括我们的宇宙图像、空间和时间、膨胀的宇宙不确定性原理、基本粒子和自然的力、黑洞、黑洞不是这么黑、时间箭头等内容。"
	},
	{
		"name": "叫魂",
	  "author":"孔飞力",
	  "category": "人文",
	  "description":"《叫魂:1768年中国妖术大恐慌》中在中国的千年帝制时代，清高宗弘历可谓是空前绝后的一人，然而在乾隆盛世达到登峰造极的时候，整个大清的政治与社会生活却被一股名为“叫魂”的妖术搅得天昏地暗。"
	},
	{
		"name": "全球通史",
	  "author":"斯塔夫里阿诺斯",
	  "category": "人文",
	  "description":"讲述了世界历史的进化，世界文明的发展及其对现代社会的影响。作者着眼于全球，侧重于那些有影响的、促进历史发展的历史事件，有八个主要的部分。",
	}
]
function init(booksList){
	booksList.map(item => {
 	new Book(item).save(function(err){
 		if (err) {
 			console.log(err);
 		}
 	});
 })
}
init(booksList);

//返回模型构造函数
module.exports = Book;
