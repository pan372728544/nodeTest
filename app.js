// 获取express
var express = require('express');
var app = express()

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// 获取数据
app.use('/public',express.static('public'));
// get 请求
app.get('/index.html',function(req,res){

    // res.send('服务器发送的数据：GET hell world');
    res.sendFile( __dirname + "/home/" + "index.html")
})

app.get('/home',function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    // 输出json
    var response = {
        "账号":req.query.name,
        "密码":req.query.pwd
    }

    console.log(response)
    res.end(JSON.stringify(response))

})


// // post 提交验证
// app.post('/process_post',urlencodedParser,function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     // 输出json
//     var response = {
//         "账号":req.body.name,
//         "密码":req.body.pwd
//     }

//     console.log(response)
//     res.end(JSON.stringify(response))
// })

// 文件上传
var fs = require("fs");
var multer  = require('multer');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
app.get('/upload.html', function (req, res) {
    res.sendFile( __dirname + "/home/" + "upload.html")
})
 

app.post('/file_upload', function (req, res) {
 
    console.log(req.files[0]);  // 上传的文件信息
    var des_file = __dirname + "/upload/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File upload success!!!', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })


// 开启监听
var server = app.listen(8081,function(){

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s",host,port)

})