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

var categoryStar = {
    'array' : [
        {
            'imageUrl':"https://gw.alicdn.com/bao/uploaded/i4/2215302589/O1CN01kBFkxZ1UznyCAaRUM_!!0-item_pic.jpg",
            'title':'逛同城',
            'subtitle':'32.7万人在线',
            'key':''
        }, {
            'imageUrl':"https://gw.alicdn.com/bao/uploaded/i1/4120077792/O1CN0127QmbtcWlbOF7pA_!!0-item_pic.jpg",
            'title':'免费送',
            'subtitle':'55.9万件宝贝',
            'key':'Hot'
        },
        {
            'imageUrl':"https://gw.alicdn.com/bao/uploaded/i2/454397463/O1CN01dznPY82506OMO3B6r_!!0-item_pic.jpg",
            'title':'租房',
            'subtitle':'真实房东',
            'key':''
        },
        {
            'imageUrl':"https://img.alicdn.com/bao/uploaded/bao/upload/TB1MpxOfG67gK0jSZFHXXa9jVXa.png_400x400q60.jpg",
            'title':'闲鱼币',
            'subtitle':'签到抢红包',
            'key':'新人礼'
        }

    ],
    'star': {
       'imageUrl':'https://img.alicdn.com/bao/uploaded/bao/upload/TB1MmzKVkvoK1RjSZFNXXcxMVXa.png_400x400q60.jpg', 
       'title': "明星在闲鱼",
       'subtitle':'李晨nic: 每周二四鞋友俱乐部'
    }

};



app.get('/xianyu/home/getCategroyList',function(request,response){

    response.send(categorylist);
});

app.get('/xianyu/home/getCategroyStar',function(request,response){

    response.send(categoryStar);
});

app.listen(8082);