/*
 * Bikash Rai
 */
App.Router = Backbone.Router.extend({

	routes: {
		"" : "index"
	},

	/**
	 * initialize the router
	 */
	initialize: function(){

		// Inicialize collection principal
		window.myCollection = new App.Collections.MyCollection();

		// Inicializa View principal
		window.appViewsApp = new App.Views.App();
	},


	/**
	 * index route
	 */
	index: function(){
		// example of user-defined events
		App.Events.trigger('myPersonalEvent');
	}

});


$(document).ready(function(){

	/**
	 * dynamic loading the templates
	 */
	window.tpl.loadTemplates(['example'], function(){

		// init
		window.app = new App.Router();
		Backbone.history.start();

	});

});