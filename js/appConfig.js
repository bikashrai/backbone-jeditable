/*
 * Bikash Rai
 * app config
 */
var appConfig = {};

// host do APP
appConfig.host = 'http://' + window.location.host + '/';

// project directory
appConfig.project = 'backbone-jeditable';

// Pastas onde o APP está armazenada. Caso o arquivo HTML não seja 'index.html'
// alterar esta linha
appConfig.uri = window.location.pathname.replace('index.html','').substr(1);

// URL para a raiz do APP
appConfig.base_url = appConfig.host + appConfig.uri;

// Pastas de assets que podem mudar de acordo com a aplicação
appConfig.folder = {};

// imagens
appConfig.folder.img = appConfig.base_url + 'pics/';

// templates
appConfig.folder.tpl = appConfig.base_url + 'tpl/';



/*
|---------------------------------------------------------------------------------
|	Configurações Backbone
|---------------------------------------------------------------------------------
*/
// Se o servidor não der suporte a requisições REST/HTTP mude para 'true'
// As requisições serão do tipo POST com parâmetro _method=PUT
Backbone.emulateHTTP = false;

// Se o servidor não der suporte a requisições 'application/json' mude para 'true'
// O objeto JSON será serializado no parâmetro 'model'
Backbone.emulateJSON = false;

/*
|---------------------------------------------------------------------------------
|	Namespaces
|---------------------------------------------------------------------------------
*/
// Main APP //
window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {},
	Events: _.extend({}, Backbone.Events)
};