$(function(){
    
    var _obj = {
    	title: "yuwenqiang",
    	desription: "desription"
    }
    
    var ToDoItem = Backbone.Model.extend({

    });

    var toDoItem = new ToDoItem(_obj);

    console.log(toDoItem.get("title"));

    toDoItem.set("title","yuwq123");

    console.log(toDoItem.toJSON().desription);

});



