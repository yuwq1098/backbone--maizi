$(function(){
    
    
    var ToDoItem = Backbone.Model.extend({

    });

    var toDoItem = new ToDoItem({
        title: "yuwenqiang",
    	desription: "desription"
    });

    var toDoItem2 = new ToDoItem({
        title: "yuwenqiang111",
        desription: "desription"
    });

    var toDoItem3 = new ToDoItem({
        title: "yuwenqiang222",
        desription: "desription"
    });

    var ToDoItemView = Backbone.View.extend({
        targetName: "div",
        className: "todo-item",
        // 事件声明
        events: {
            "mouseover": "hoverFun",
            "click em" : "changeCss",
            "dblclick span"  : "dbclickFun",
            "click .remove"  : "removeFun",
        },
        // 构造函数，backbone在实例化操作时，自动调用该方法
        initialize: function(){
            // this.listenTo(this.model,"change",this.render);
            // 侦听model被销毁的事件， this(view)移除
            this.listenTo(this.model,"destroy",this.remove);
            this.render();
        },
        // 视图渲染
        render: function(){
            console.log("this model is changed!");
            console.log(this.model.changed);
            var oJSON = this.model.toJSON();
            console.log(oJSON);
            this.$el.html("<h2>"+oJSON.title+"</h2><p>"+oJSON.desription+"<i class='remove'>删除</i></p>");
            return this;
        },
        // 悬浮触发
        hoverFun: function(e){
            console.log("hover");
        },
        // 改变样式
        changeCss: function(e){
            // 把backbone的DOM转换成 $DOM
            console.log($(e.target).html());
            // 侦听委托的对象改变样式
            $(e.delegateTarget).css("color","#f83");
            // 被触发的对象改变样式
            $(e.target).css("color","red");

        },
        // 双击事件
        dbclickFun: function(e){
            console.log("双击老子干嘛？有病？");
        },
        // 删除事件
        removeFun: function(e){
            // 销毁一个model，
            this.model.destroy();
        },

    });

    var toDoItemView = new ToDoItemView({
        
        el: "#p1",
        model: toDoItem,
        /*不调用*/
        render: function () {
            console.log("新的render方法，老的死开，草，没有initialize构造函数，老子无效");
        }
    });
    
    // 如果继承的是同样的ToDoItemView，侦听的也是同样的model，那么model改变时，两个view同时改变
    var toDoItemView2 = new ToDoItemView({
        
        el: "#p2",
        model: toDoItem,
        // 覆盖了粑粑的initialize,有initialize构造函数，老子也无效
        initialize: function(){
            this.listenTo(toDoItem,"change",this.render);
        },
        render: function () {
            console.log("新的render方法，老的死开，草，有initialize构造函数，老子也无效");
        }
    });

    var toDoItemView3 = new ToDoItemView({
        model: toDoItem2,
    });

    var toDoItemView4 = new ToDoItemView({
        model: toDoItem3,
    });
    
    // toDoItemView.listenTo(toDoItem,"change",function(){
    //     console.log("this model is changed!");
    // });
    
    toDoItem.set({"title":"Geek.Yu","desription":"a good development!"});

    toDoItemView3.render().$el.appendTo($("body"));

    toDoItemView4.render().$el.appendTo($("body"));


});



