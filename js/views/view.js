/*
 * Bikash Rai
 * view
 */
App.Views.App = Backbone.View.extend({

	initialize: function(){
		this.template = _.template(tpl.get('example'));
		App.Events.on('myPersonalEvent', this.eventResponse, this);

	},

	render: function(eventName){
		this.$el.html(this.template);
		return this;
	},

    events: {
        'click .editable_textarea': 'editTextarea',
        'click .editable_select': 'editSelect',
        'click .editable_textile': 'editTextile',
        'click .click': 'editClick',
        'dblclick .dblclick': 'editDblClick',
        'mouseover .mouseover': 'editMouseOver'

    },

    editTextarea: function () {
        $(".editable_textarea").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            type   : 'textarea',
            submitdata: { _method: "put" },
            select : true,
            submit : 'OK',
            cancel : 'cancel',
            cssclass : "editable"
        });
    },

    editSelect: function () {
        $(".editable_select").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            data   : "{'Lorem ipsum':'Lorem ipsum','Ipsum dolor':'Ipsum dolor','Dolor sit':'Dolor sit'}",
            type   : "select",
            submit : "OK",
            style  : "inherit",
            submitdata : function() {
                return {id : 2};
            }
        });
    },

    editTextile: function () {
        $(".editable_textile").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            loadurl   : appConfig.host+"/"+appConfig.project+"/README.md",
            type      : "textarea",
            submit    : "OK",
            cancel    : "Cancel",
            tooltip   : "Click to edit..."
        });
    },

    editClick: function () {
        $(".click").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Click to edit...",
            style  : "inherit"
        });
    },

    editDblClick: function () {
        $(".dblclick").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Doubleclick to edit...",
            event     : "dblclick",
            style  : "inherit"
        });
    },

    editMouseOver: function () {
        $(".mouseover").editable("api", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Move mouseover to edit...",
            event     : "mouseover",
            style  : "inherit"
        });
    },

	eventResponse: function() {
		var page = new App.Views.App();
		$(".main").html(page.render().el);
		
	}

});

