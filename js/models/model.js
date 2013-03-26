/*
|---------------------------------------------------------------------------------
|	Model modelo
|---------------------------------------------------------------------------------
*/
App.Models.MyModel = Backbone.Model.extend({

});


/*
|---------------------------------------------------------------------------------
|	Collection modelo
|---------------------------------------------------------------------------------
*/
App.Collections.MyCollection = Backbone.Collection.extend({

	model: App.Models.MyModel,

	// Save all of the todo items under the `"my-backbone"` namespace.
	// Para sobreescrever sync o script "lib/backbone-localstorage.js"
	// deve estar referenciado no index.html
    localStorage: new Backbone.LocalStorage("my-backbone")

});