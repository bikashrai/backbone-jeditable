/*
|---------------------------------------------------------------------------------
|	Estrutura todas as URLs do APP.
|---------------------------------------------------------------------------------
*/
App.Router = Backbone.Router.extend({

	routes: {
		"" : "index"
	},

	/**
	 * Todas as inicializações devem vir aqui
	 */
	initialize: function(){

		// Inicializa coleção principal
		window.myCollection = new App.Collections.MyCollection();

		// Inicializa View principal
		window.appViewsApp = new App.Views.App();
	},


	/**
	 * Página inicial
	 */
	index: function(){
		// Disparando um evento personalizado
		// Aceita argumentos como segundo parâmetro
		App.Events.trigger('myPersonalEvent');
	}

});


$(document).ready(function(){

	/**
	 * Carrega os templates necessários... inicia APP
	 */
	window.tpl.loadTemplates(['example'], function(){

		// init
		window.app = new App.Router();
		Backbone.history.start();

	});

});