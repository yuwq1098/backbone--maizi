$(function(){
    
    var AppRouter = Backbone.Router.extend({
        
        // 初始化
        initialize: function(){
            $("#page1").hide();
            $("#page2").hide();
        },
        
        // 定义路由键值对
        routes: {
            'page1' : 'showPage1',
            'page2' : 'showPage2',
        },
        
        // action
        showPage1: function(){
            $("#page2").hide();
            $("#page1").show();
        },

        showPage2: function(){
            $("#page1").hide();
            $("#page2").show();
        }

    });
    
    // 实例化路由
    var app = new AppRouter();
    
    // 启动历史管理  => url
    Backbone.history.start();
  
});



