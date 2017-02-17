$(function(){
    
    //顶部导航条模型
	var NavBarModel = Backbone.Model.extend(
	{

	});

	//顶部导航条集合
	var NavBarCollection = Backbone.Collection.extend(
	{
        model: NavBarModel,
	});

	/*实例化顶部导航条集合*/
    var navBarCollection = new NavBarCollection(urlsMap);
    
    //顶部导航条视图
	var NavBarView = Backbone.View.extend(
	{
        el: "ul.navbar",
		events: {
			"click li":  "cutStyle"
		},

		initialize: function() 
		{
			this.listenTo(this.model, "reset", this.render);
		},

		render: function() 
		{
			this.collection.each(function(model){
				console.log(model);
			})
		},

		cutStyle: function(e) 
		{

            var _this = this;
			var index    = '';
			//获取当前索引值
			if(e) index  = $(e.currentTarget).index();
			index = index ? index : 0;
			this.index = index;
            
            /*获取当前点击的li元素*/
			var _thisLi = _this.$el.find("li").eq(index);

			if(!_thisLi.hasClass("on"))
			{
                _thisLi.addClass("on").siblings("li").removeClass("on");
			}
		}

	});
    
	/*实例化顶部导航条视图*/
	var navBarView = new NavBarView({ collection : navBarCollection });

	var leftNavView = Backbone.View.extend(
	{
        el: "section.navBar-left ul",
		events: {
			"click li":  "cutStyle"
		},

		initialize: function() 
		{
			this.listenTo(this.model, "change", this.render);
		},

		render: function() 
		{
			alert("aaa");
		},

		cutStyle: function(e) 
		{

            var _this = this;
			var index    = '';
			//获取当前索引值
			if(e) index  = $(e.currentTarget).index();
			index = index ? index : 0;
			this.index = index;
            
            /*获取当前点击的li元素*/
			var _thisLi = _this.$el.find("li").eq(index);

			if(!_thisLi.hasClass("on"))
			{
                _thisLi.addClass("on").siblings("li").removeClass("on");
			}
		}

	});
    

	var VleftNav = new leftNavView();

});



