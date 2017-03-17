$(function(){
    
    
    var ToDoItem = Backbone.Model.extend({

    });

    var toDoItem = new ToDoItem({
        title: "yuwenqiang",
    	desription: "desription"
    });

    var toDoItem2 = new ToDoItem();

    toDoItem.on("change",function(){
        console.log("toDoItem is change!");
        // 先把attribute里的object数据用toJSON方法转一下格式，然后获取其中的title值
        console.log("new title: "+this.toJSON().title);
        // 回调，得到新的自身对象
        console.log(this);
        // 如果这个model的title属性发生变化
        if(this.hasChanged("title")){
            console.log("this title is changed!");
        }else{
            // 第二次重复改变相同值，changed事件不触发
            console.log("this title is not changed!");
        }
    });
    
    //只监听desription是否改变
    // toDoItem.on("change:desription",function(){
    //     console.log("this desription is changed!");   
    // });
    
    // 取消侦听
    // toDoItem.off("change");
    
    // 只执行一次on绑定事件，然后自动解绑
    toDoItem.once("change:desription",function(){
        console.log("this desription is changed!");   
    });
    
    // 在on/once之后写off,  事件触发之前就取消侦听，所以上一段代码无效
    // toDoItem.off("change:desription");

    // silent只是backbone model内置的一个option, silent:true 不触发事件回调
    toDoItem.set({"title":"古力娜扎","desription":"没啥发展！"},{silent:true});
    
    // 重复改变相同值，看是否触发changed ，changed事件不触发， silent：true时，相同值仍不触发
    toDoItem.set({"title":"古力娜扎","desription":"没啥发展！"});

    // 新变更时 触发事件回调
    toDoItem.set({"title":"古力娜扎","desription":"没啥发展11！"});
    
    // model2侦听model，model发生指定变化时，model2可以进行一些操作，比如重新渲染视图，，一般view侦听model,  view侦听collection
    toDoItem2.listenTo(toDoItem,"change:title",function(){
        console.log("new listenTo:  ");
        console.log(this);
    });

    // 新变更时 触发事件回调
    toDoItem.set({"title":"古力娜扎16","desription":"没啥发展2222！"});

    // trigger事件，无需任何条件，直接触发事件
    toDoItem.trigger('change');
    
    // 绑定在toDoItem上的自定义事件
    toDoItem.on("Geek.Yu",function(){
        console.log("This is a custom event!");
    });
    
    // trigger事件，可以触发自定义事件
    toDoItem.trigger('Geek.Yu');

    //其他事件   销毁destory、服务器同步sync、校验invalid

    




});



