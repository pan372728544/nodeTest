var express = require("express");

var app = express();

var categorylist = [
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1pQz6Pa6qK1RjSZFmwu00PFXa.png","title":"二手手机"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1baHrPmzqK1RjSZPcwu2TepXa.png","title":"数码"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1AMz4PXzqK1RjSZFowu2fcXXa.png","title":"二手图书"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1vMn0PbPpK1RjSZFFwu15PpXa.png","title":"农人土货"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1k4Z2ce3tHKVjSZSgwu04QFXa.png","title":"家具家电"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1sfcdPhYaK1RjSZFnwu180pXa.png","title":"服饰鞋包"},
{"imageUrl":"https://gw.alicdn.com/tfs/TB1TpaCS4jaK1RjSZFAXXbdLFXa-158-158.png","title":"美妆闲置"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1vMn0PbPpK1RjSZFFwu15PpXa.png","title":"二手车"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1hTT7PXzqK1RjSZFCwu2bxVXa.png","title":"超值租"},
{"imageUrl":"https://img.alicdn.com/tps/i4/TB1XhUcPhYaK1RjSZFnwu180pXa.png","title":"全部分类"},
];

var categoryStar = {
    "array" : [
        {
            "imageUrl":"https://gw.alicdn.com/bao/uploaded/i4/2215302589/O1CN01kBFkxZ1UznyCAaRUM_!!0-item_pic.jpg",
            "title":"逛同城",
            "subtitle":"32.7万人在线",
            "key":""
        }, {
            "imageUrl":"https://gw.alicdn.com/bao/uploaded/i1/4120077792/O1CN0127QmbtcWlbOF7pA_!!0-item_pic.jpg",
            "title":"免费送",
            "subtitle":"55.9万件宝贝",
            "key":"Hot"
        },
        {
            "imageUrl":"https://gw.alicdn.com/bao/uploaded/i2/454397463/O1CN01dznPY82506OMO3B6r_!!0-item_pic.jpg",
            "title":"租房",
            "subtitle":"真实房东",
            "key":""
        },
        {
            "imageUrl":"https://img.alicdn.com/bao/uploaded/bao/upload/TB1MpxOfG67gK0jSZFHXXa9jVXa.png_400x400q60.jpg",
            "title":"闲鱼币",
            "subtitle":"签到抢红包",
            "key":"新人礼"
        }

    ],
    "star": {
       "imageUrl":"https://img.alicdn.com/bao/uploaded/bao/upload/TB1MmzKVkvoK1RjSZFNXXcxMVXa.png_400x400q60.jpg", 
       "title": "明星在闲鱼",
       "subtitle":"李晨nic: 每周二四鞋友俱乐部"
    }

};


var commandProductsList = {
	"totalPage": "2",

	"product": [{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i4/2215302589/O1CN01kBFkxZ1UznyCAaRUM_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥199.99",
		"count": "15人想要",
		"userUrl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg",
		"userName": "用户名字啊",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i1/2201212264886/O1CN01VjWlHz1lxpjni4T8t_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥213.99",
		"count": "33人想要",
		"userUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4288221592,2777225374&fm=26&gp=0.jpg",
		"userName": "接口是",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i4/2735056875/O1CN01V9hP9B20enVdSo1oX_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据   数据数据数据数据",
		"price": "￥313.99",
		"count": "1人想要",
		"userUrl": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2188118499,572678618&fm=26&gp=0.jpg",
		"userName": "阿斯顿发",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i1/836074165/O1CN01orUlNS1gdc8FkLj61_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据    数据数据数据数据  数据数据数据数据",
		"price": "￥413.99",
		"count": "999人想要",
		"userUrl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2188301108,2208747323&fm=26&gp=0.jpg",
		"userName": "按时",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i1/2592893621/O1CN01zHlbUO1ccSgjRDuwL_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥513.99",
		"count": "85人想要",
		"userUrl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3865525855,2169088944&fm=26&gp=0.jpg",
		"userName": "阿萨德",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i2/3026146212/O1CN01M23SZq1vl8tamPqTH_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据    数据数据数据数据",
		"price": "￥613.99",
		"count": "78人想要",
		"userUrl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1321463267,128419202&fm=26&gp=0.jpg",
		"userName": "看看",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i2/2228004243/O1CN01yhfLVY1hDL31Y3544_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据    数据数据数据数据  数据数据数据数据",
		"price": "￥713.99",
		"count": "15人想要",
		"userUrl": "",
		"userName": "",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i3/2118680248/TB1SbN8dXHM8KJjSZJiXXbx3FXa_!!0-item_pic.jpg",
		"productTitle": "第一页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥813.99",
		"count": "1500人想要",
		"userUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=320178652,790985626&fm=26&gp=0.jpg",
		"userName": "uu",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://img.alicdn.com/bao/uploaded/bao/upload/TB1QSj4VrPpK1RjSZFFXXa5PpXa.png_400x400q60.jpg",
		"productTitle": "第一页数据 数据数据数据数据   数据数据数据数据",
		"price": "￥913.99",
		"count": "105人想要",
		"userUrl": "https://i01piccdn.sogoucdn.com/3c28af542f2d49f7-fe9c78d2ff4ac332-f8f8d47f3118e19869b813f8d6576662_qq",
		"userName": "usjad",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://img.alicdn.com/bao/uploaded/bao/upload/TB14hNqXa5s3KVjSZFNXXcD3FXa.png_400x400q60.jpg",
		"productTitle": "第一页数据 数据数据数据数据   数据数据数据数据  数据数据数据数据",
		"price": "￥1013.99",
		"count": "56人想要",
		"userUrl": "https://i01piccdn.sogoucdn.com/3c28af542f2d49f7-fe9c78d2ff4ac332-c59300ad1d091b38e53c1d835e186bcc_qq",
		"userName": "ajsdf",
		"zhima": "芝麻信用|极好"
	}]

};


var commandProductsList2 = {
	"totalPage": "2",

	"product": [{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i4/2215302589/O1CN01kBFkxZ1UznyCAaRUM_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥199.99",
		"count": "15人想要",
		"userUrl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1820523987,3798556096&fm=26&gp=0.jpg",
		"userName": "用户名字啊",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i1/2201212264886/O1CN01VjWlHz1lxpjni4T8t_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥213.99",
		"count": "33人想要",
		"userUrl": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4288221592,2777225374&fm=26&gp=0.jpg",
		"userName": "接口是",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i4/2735056875/O1CN01V9hP9B20enVdSo1oX_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据   数据数据数据数据",
		"price": "￥313.99",
		"count": "1人想要",
		"userUrl": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2188118499,572678618&fm=26&gp=0.jpg",
		"userName": "阿斯顿发",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i1/836074165/O1CN01orUlNS1gdc8FkLj61_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据    数据数据数据数据  数据数据数据数据",
		"price": "￥413.99",
		"count": "999人想要",
		"userUrl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2188301108,2208747323&fm=26&gp=0.jpg",
		"userName": "按时",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i1/2592893621/O1CN01zHlbUO1ccSgjRDuwL_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥513.99",
		"count": "85人想要",
		"userUrl": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3865525855,2169088944&fm=26&gp=0.jpg",
		"userName": "阿萨德",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i2/3026146212/O1CN01M23SZq1vl8tamPqTH_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据    数据数据数据数据",
		"price": "￥613.99",
		"count": "78人想要",
		"userUrl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1321463267,128419202&fm=26&gp=0.jpg",
		"userName": "看看",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i2/2228004243/O1CN01yhfLVY1hDL31Y3544_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据    数据数据数据数据  数据数据数据数据",
		"price": "￥713.99",
		"count": "15人想要",
		"userUrl": "",
		"userName": "",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://gw.alicdn.com/bao/uploaded/i3/2118680248/TB1SbN8dXHM8KJjSZJiXXbx3FXa_!!0-item_pic.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据  数据数据数据数据  数据数据数据数据  数据数据数据数据",
		"price": "￥813.99",
		"count": "1500人想要",
		"userUrl": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=320178652,790985626&fm=26&gp=0.jpg",
		"userName": "uu",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://img.alicdn.com/bao/uploaded/bao/upload/TB1QSj4VrPpK1RjSZFFXXa5PpXa.png_400x400q60.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据   数据数据数据数据",
		"price": "￥913.99",
		"count": "105人想要",
		"userUrl": "http://img1.imgtn.bdimg.com/it/u=3677460379,2967028570&fm=26&gp=0.jpg",
		"userName": "usjad",
		"zhima": "芝麻信用|极好"
	},{
		"key": "关注",
		"productUrl": "https://img.alicdn.com/bao/uploaded/bao/upload/TB14hNqXa5s3KVjSZFNXXcD3FXa.png_400x400q60.jpg",
		"productTitle": "第2️⃣页数据 数据数据数据数据   数据数据数据数据  数据数据数据数据",
		"price": "￥1013.99",
		"count": "56人想要",
		"userUrl": "http://img2.imgtn.bdimg.com/it/u=399600612,252901190&fm=26&gp=0.jpg",
		"userName": "ajsdf",
		"zhima": "芝麻信用|极好"
	}]

};


var commandList = {
   "titles":[
       {
        "title": "关注",
        "titleId": "1",
       },
       {
        "title": "新鲜",
        "titleId": "2",
       },
      
       {
        "title": "附近",
        "titleId": "3",
       },
      
       {
        "title": "手机",
        "titleId": "4",
       },
      
       {
        "title": "数码",
        "titleId": "5",
       },
      
       {
        "title": "租房",
        "titleId": "6",
       },
      
       {
        "title": "服装",
        "titleId": "7",
       },
      
       {
        "title": "居家",
        "titleId": "8",
       },
      
       {
        "title": "美妆",
        "titleId": "9",
       },

       {
        "title": "运动",
        "titleId": "10",
       },
   ]
};



app.get("/xianyu/home/getCategroyList",function(request,response){

    response.send(categorylist);
});

app.get("/xianyu/home/getCategroyStar",function(request,response){

    response.send(categoryStar);
});

// 
app.get("/xianyu/home/getCommendList",function(request,response){

    response.send(commandList);
});

app.get("/xianyu/home/getProductList",function(request,response){

	var que = request.query;
	console.log(request.query);

	if (que["page"] <= 2) {
		if (que["page"] == 1) {
			// 第一页数据
			response.send(commandProductsList);
		} else  {

			// 第二页数据
			response.send(commandProductsList2);
		}
	
	}



	
    
});





app.listen(8082);