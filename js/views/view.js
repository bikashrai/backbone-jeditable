/*
|---------------------------------------------------------------------------------
|	View module
|---------------------------------------------------------------------------------
*/
App.Views.App = Backbone.View.extend({

	initialize: function(){
		this.template = _.template(tpl.get('example'));

		// Exemplo de evento personalizado, ver App.Router
		App.Events.on('myPersonalEvent', this.eventResponse, this);

	},

	render: function(eventName){
		this.$el.html(this.template);
		return this;
	},

    events: {
        'click .editable_textarea': 'editTextarea',
        'click .editable_select': 'editSelect',
        'click .click': 'editClick',
        'dblclick .dblclick': 'editDblClick',
        'mouseover .mouseover': 'editMouseOver'

    },

    editTextarea: function () {
        $(".editable_textarea").editable("<?php print $url ?>save.php", {
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
        $(".editable_select").editable("<?php print $url ?>save.php", {
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

    editClick: function () {
        $(".click").editable("<?php print $url ?>echo.php", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Click to edit...",
            style  : "inherit"
        });
    },

    editDblClick: function () {
        $(".dblclick").editable("<?php print $url ?>echo.php", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Doubleclick to edit...",
            event     : "dblclick",
            style  : "inherit"
        });
    },

    editMouseOver: function () {
        $(".mouseover").editable("<?php print $url ?>echo.php", {
            indicator : "<img src='"+appConfig.host+"/"+appConfig.project+"/img/indicator.gif'>",
            tooltip   : "Move mouseover to edit...",
            event     : "mouseover",
            style  : "inherit"
        });
    },

	eventResponse: function() {

		// Renderiza View de exemplo
		var page = new App.Views.App();
		$(".main").html(page.render().el);
		
	}

});

