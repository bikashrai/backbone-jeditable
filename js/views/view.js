/*
|---------------------------------------------------------------------------------
|	View modelo
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

	/**
	 * Método de exemplo que é invocado pelo evento personalizado
	 * ----------------------------------------------------------
	 */
	eventResponse: function(){

		// Renderiza View de exemplo
		var page = new App.Views.App();
		$(".main").html(page.render().el);
		
	}

});

