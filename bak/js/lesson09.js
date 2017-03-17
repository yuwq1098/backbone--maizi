$(function(){
    
    var list =[
        {
            title: "title",
            description: "description1"
        },
        {
            title: "title",
            description: "description2"
        },
        {
            title: "title",
            description: "description3"
        },
    ]

    var MyList = Backbone.Collection.extend({});

    var myList = new MyList(list);

    console.log(myList);
    console.log(myList.toJSON()); 

    var oModel = myList.at(1);
    console.log(oModel.get("title"));

    // collection，重置==清零
    // myList.reset();
    myList.remove(oModel);
    console.log(myList);
    console.log(myList.toJSON()); 


    var ToDoItem = Backbone.Model.extend({
        // model默认的属性
        defaults: {
            title : "Geek.Yu"
        },
    })

    var toDoItem = new ToDoItem({
        description: "description4"
    });

    var toDoItem2 = new ToDoItem({
        description: "description5"
    });
    
    // 往collection里新增一个model
    myList.add(toDoItem);
    // 往collection里新增一个model，如果已存在这个model就不执行
    myList.add(toDoItem);

    console.log(myList);
    console.log(myList.toJSON()); 


    // 往collection里的最前面新增一个model，如果model已经存在就不执行
    myList.unshift(toDoItem2);

    console.log(myList);
    console.log(myList.toJSON()); 
    
    // 查询collection内有没有description=description5的model
    var search = myList.find(function(model){
        if(model.get("description")=="description5"){
            return model;
        }
        return false;
    })
    
    // find方法只是查找一个
    var search2 = myList.find(function(model){
        return model.get("title")=="Geek.Yu";
    })

    // filter方法查找多个, 得到的不是集合类型，只是个还有多个model的对象
    var search3 = myList.filter(function(model){
        return model.get("title")=="title";
    })

    // where,条件查找
    var search4 = myList.where({
        "title": "Geek.Yu",
    })

    // findWhere,条件查找,返回第一个模型
    var search5 = myList.findWhere({
        "title": "Geek.Yu",
    })
    
    console.log("\n 查询collection内有没有description=description5的model => \n"+search);
    console.log(search);

    console.log("\n find方法只是查找一个 => \n"+search2);
    console.log(search2);

    console.log("\n filter方法查找多个, 得到的不是集合类型，只是个还有多个model的对象 => \n"+search3);
    console.log(search3);

    console.log("\n where,条件查找 => \n"+search4);
    console.log(search4);

    console.log("\n findWhere,条件查找,返回第一个模型 => \n"+search5);
    console.log(search5);
    
    // 遍历
    myList.each(function(model){
        console.log(model.get("title"));    
    });
    
    // collection内每个model是否都满足同一条件
    var foo =  myList.every(function(model){
        return model.get("title")=="title";
    })
    console.log(foo);
    
    // collection内只要有一个model满足条件就返回true
    var foo1 =  myList.some(function(model){
        return model.get("title")=="title";
    })
    console.log(foo1);

    // 遍历,返回单个相应属性集合对象，多属性无效
    var search6 = myList.pluck("description");
    console.log(search6);
    
    // 对collection中的每个model做迭代，迭代的结果取决于map的返回值
    var search7 = myList.map(function(model){
        return model.get("title");
    })
    console.log(search7);

    // reduce，结果值叠加,  memo初始值就是reduce后面的以一个参数
    var search8 = myList.reduce(function(memo,model){
        return memo + "," + model.get("description");
    },"");
    console.log(search8);

    // reduce，结果值叠加,右侧开始组合的元素
    var search9 = myList.reduceRight(function(memo,model){
        return memo + "," + model.get("description");
    },"")
    console.log(search9);
    
    // reduce，结果值叠加,右侧开始组合的元素  concat 追加 js对象操作
    var list = [[0, 1], [2, 3], [4, 5]];
    var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
    console.log(flat);

    myList.map(function(model){
        console.log(model.get("title"));    
    });



});



