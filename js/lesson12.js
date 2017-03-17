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
            'page2/:id' : 'showPage2byId',
        },
        
        // action
        showPage1: function(){
            $("#page2").hide();
            $("#page1").show();
        },

        showPage2: function(){
            $("#page1").hide();
            $("#page2").show();
        },
        
        // 类似于文章id，传值，通常用于详情页和编辑页
        showPage2byId: function(id){
            console.log(id);
            $("#page1").hide();
            $("#page2").show();
        }

    });
    
    // 实例化路由
    var app = new AppRouter();
    
    // 启动历史管理  => url
    Backbone.history.start({ pushStart: true,root:""});

    $("#gotoPage1").on("click",function(e){
        
        // 取消a标签默认行为
        e.preventDefault();
        // 切换路径
        // location.href="#page1";
        
        // 只切换url，不触发方法
        // app.navigate("page1");
        
        // 下面两种都可以     通过navigate不会刷新服务器，a标签会  ， 不需要前导#
        app.navigate("page1",{trigger: true});
        // app.navigate("#page1",{trigger: true});
        console.log("跳转");

    });
  
});



