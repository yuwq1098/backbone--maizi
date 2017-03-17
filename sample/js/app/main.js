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

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

