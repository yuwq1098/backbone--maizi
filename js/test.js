$(function(){
    
    
    var ToDoItem = Backbone.Model.extend({

    });

    var toDoItem = new ToDoItem({
        title: "yuwenqiang",
    	desription: "desription"
    });
    
    var ToDoItemView = Backbone.View.extend({
        /*tagName: "li",
        className: "cli",*/
        /*attributes: {
        	style: "color:red;height: 400px; background-color: #444;",
        },*/
        render: function(){
            this.$el.html('<span>HEAD<span>');
            return this;
        },
    })

    var ToDoItemView02 = Backbone.View.extend({
        tagName: "p",
        className: "#talk",

        //重绘的方法
        render: function(){
            this.$el.html('<span>'+this.model.get("title")+'</span>&nbsp;&nbsp;is&nbsp;&nbsp;<span>'+this.model.get("desription")+'</span>');
            return this;
        },
    })



    var toDoTtemView = new ToDoItemView({
    	id: "item",
    });
    var toDoTtemView2 = new ToDoItemView({
    	id: "item2",
    });
    var toDoTtemView3 = new ToDoItemView({
    	/*tagName:"div",
    	className: false,
        id:"head",*/
    	el: "#head",
    });

    toDoTtemView3.render();

    var toDoTtemView4 = new ToDoItemView02({
        model: toDoItem,
    });
    
    toDoTtemView4.render().$el.appendTo($('body'));


    console.log(toDoTtemView);
    console.log(toDoTtemView.el.style);
    
    console.log(toDoTtemView2);

    console.log(toDoTtemView3);
    
    console.log(toDoTtemView4);
    
    /*model更新后需要再次渲染*/
    toDoItem.set("title","yuwq");
    // toDoTtemView4.render().$el.appendTo($('body'));  不需要再次appendTo
    toDoTtemView4.render();   

    /*toDoTtemView4.remove();  //删除渲染
    console.log(toDoTtemView4);

    toDoTtemView4.render().$el.appendTo($('body'));
    console.log(toDoTtemView4);
*/





});



