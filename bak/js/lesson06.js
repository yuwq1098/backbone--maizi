$(function(){

    // 把backbone的Events属性给简单的对象
    var tom = {}
    _.extend(tom,Backbone.Events);

    var jerry = {}
    _.extend(jerry,Backbone.Events);

    jerry.listenTo(tom,"run",function(){
        console.log("jerry, you tom is run!");
    });

    tom.trigger("run");

    // 一定要是个函数而不是个对象
    var Cat = function() {

    }

    _.extend(Cat.prototype,Backbone.Events);

    var zhangsan = new Cat();

    var lisi = new Cat();

    zhangsan.listenTo(lisi,"run",function(){
        console.log("zhangsan, this lisi is run!");
    })

    lisi.trigger("run");

});



