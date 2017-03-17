$(function(){
    
    var list =[
        {
            title: "title1",
            description: "description1"
        },
        {
            title: "title2",
            description: "description2"
        },
        {
            title: "title3",
            description: "description3"
        },
    ]

    var MyList = Backbone.Collection.extend({
        // 默认A-Za-z字母顺序排序  ，大写优先
        comparator: "title",
        // 默认score数值大小排序  ，小的在前，，，，无值位置不变
        comparator: function(a,b){
            return parseInt(a.get("score")) > parseInt(b.get("score"));
        },
        // 默认{name}字段长度length排序 
        comparator: function(a,b){
            return a.get("title").length > b.get("title").length;
        }
    })
   
    // 实力化一个collection的对象
    var aList = new MyList(list);

    console.log(aList);

    var ItemView = Backbone.View.extend({
        tagName: "div",
        className: "list-item",
        render: function(){
            this.$el.html(this.model.get("title")+"  ==  "+this.model.get("score"));
            return this;
        }

    })

    var ListView = Backbone.View.extend({
        initialize: function(){
            if(this.collection){
                // key value对，键值对应对象
                this.byId = {};
                // 数组
                this.views = [];
                // 注册view
                this.collection.each(this.registerView,this);
                this.listenTo(this.collection,"reset",this.resetView);
                this.listenTo(this.collection,"add",this.addView);
                this.listenTo(this.collection,"remove",this.removeView);
                this.listenTo(this.collection,"change",this.updateView);
                this.listenTo(this.collection,"sort",this.resetView);
            }
        },
        
        // 注册view
        registerView: function(model){
            var view = new ItemView({ model: model });
            // model.cid cid是moel的id，是不重复的唯一id  
            //  model.cid作为key，view作为value值  ---- 加快查询速度，key-value 快于遍历数组
            this.byId[model.cid] = view;
            // 维护model的顺序和collection的顺序保持一致
            this.views.push(view);
        },
        
        // 新增view
        addView: function(model){
            var view = new ItemView({ model: model});
            var at = this.collection.indexOf(model);
            // 维护键值对存储
            this.byId[model.cid] = view;
            var $before = this.views[at-1].$el;
            // 更新视图，新增
            $before.after(view.render().$el);
            // at 是指定位置，0 表示添加  view表示对象
            this.views.splice(at,0,view);
        },
        
        // 删除view
        removeView: function(model){
            var view = this.byId[model.cid];
            // 删除相应的键值对
            delete this.byId[model.cid];
            // 更新视图，删除
            view.remove();
            // 找查当前这个view的索引
            var at = _.indexOf(this.views,view);
            // 删除view的集合中对应的view
            this.views.splice(at,1);
        },

        // 重置views , 回归初始化状态
        resetView: function(){
            this.byId = {};
            this.views = [];
            this.collection.each(this.registerView,this);
            this.render();
        },
        
        // 更新view
        updateView: function(model){
            var view = this.byId[model.cid];
            console.log("11111");
            console.log(view);
            // 重新渲染itemView => render
            view.render();
        },
        
        // 视图渲染
        render: function(){
            var _this = this;
            this.$el.empty();
            console.log(this.views);
            console.log("22222");
            _.each(this.views,function(view){
                var $_el = view.render().$el;
                _this.$el.append($_el);
            })

            return this;
        }
    })

    var aView = new ListView({
        el : "#aView",
        collection: aList,
    })

    aView.render();
    
    // add , 向collection中插入一个model, at 指定插入的位置（下标）
    aList.add({
        title: "title added",
        description: "description added",
    },{at:2})
    
    // destroy可以触发remove事件
    // aList.models[2].destroy();

    // 清空重置collection
    // aList.reset();

    var newDataSource = [
        {
            title: "cnew title1aaaaaa",
            description: "description1",
            score: "80",
        },
        {
            title: "anew title2aa",
            description: "description2",
            score: "90",
        },
        {
            title: "bnew title3aaaa",
            description: "description3",
            score: "30",
        },
    ];

    // 重置collection,把新的collection放进去重新渲染

    aList.reset(newDataSource);

    aList.models[0].set("title","Geek.Yu");

    // add , 向collection中插入一个model, at 指定插入的位置（下标）
    aList.add({
        title: "title added",
        description: "description added",
    },{at:1});
    // at插入后，如果不重新sort，插入的model不参与排序规则

    
    // 调用重新排序方法,  如果排序值不存在，那么这个model的位置不变
    aList.sort();
  
});



