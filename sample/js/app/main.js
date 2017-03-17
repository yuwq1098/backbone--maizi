var PageIssueList = BasePage.extend({
    el: "#page-issue-list",
});

var PageIssueCreate = BasePage.extend({
    el: "#page-issue-create",
});

var PageIssueEdit = BasePage.extend({
    el: "#page-issue-edit",
});


var AppRouter = Backbone.Router.extend({

    initialize: function(){
        this.pageIssueList = new PageIssueList();
        this.pageIssueCreate = new PageIssueCreate();
        this.pageIssueEdit = new PageIssueEdit();
        this.init();
    },

    init: function(){

    },

    hideAllPages: function(){
        this.pageIssueList.hide();
        this.pageIssueCreate.hide();
        this.pageIssueEdit.hide();
    },

    // 匹配优先级由上至下
    routes: {
    	"issue/new": "issueCreate",
        "issue/:id": "issueEdit",
        // 路由匹配值为空时，走issueList
        "": "issueList",
    },

    issueEdit: function(id){
        this.hideAllPages();
        this.pageIssueEdit.show();
        console.log(id);
        console.log("issueEdit");

    },

    issueCreate: function(){
    	this.hideAllPages();
    	this.pageIssueCreate.show();
        console.log("issueCreate");

    },

    issueList: function(){
    	this.hideAllPages();
    	this.pageIssueList.show();

    },
});

var app = new AppRouter();

Backbone.history.start();