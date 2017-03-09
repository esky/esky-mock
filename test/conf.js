module.exports =  {
	// 请求默认的延迟时间
	delay: 300,
	// 基础路径，假数据的URL则省略该路径不写
	base: 'api',
	// 服务端口，配合webpack的代理使用
	port: 3330,
	// 【必须】假数据文件目录相对路径(相对于node命令的执行路径)
	dataDir: 'test/data'
}