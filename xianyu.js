var express = require('express');

var app = express();

var categorylist = [
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1pQz6Pa6qK1RjSZFmwu00PFXa.png','title':'二手手机'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1baHrPmzqK1RjSZPcwu2TepXa.png','title':'数码'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1AMz4PXzqK1RjSZFowu2fcXXa.png','title':'二手图书'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1vMn0PbPpK1RjSZFFwu15PpXa.png','title':'农人土货'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1k4Z2ce3tHKVjSZSgwu04QFXa.png','title':'家具家电'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1sfcdPhYaK1RjSZFnwu180pXa.png','title':'服饰鞋包'},
{'imageUrl':'https://gw.alicdn.com/tfs/TB1TpaCS4jaK1RjSZFAXXbdLFXa-158-158.png','title':'美妆闲置'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1vMn0PbPpK1RjSZFFwu15PpXa.png','title':'二手车'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1hTT7PXzqK1RjSZFCwu2bxVXa.png','title':'超值租'},
{'imageUrl':'https://img.alicdn.com/tps/i4/TB1XhUcPhYaK1RjSZFnwu180pXa.png','title':'全部分类'},
];

app.get('/xianyu/home/getCategroyList',function(request,response){

    response.send(categorylist);
});

app.listen(8082);