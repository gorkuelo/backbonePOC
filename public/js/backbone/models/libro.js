var Libro = Backbone.Model.extend({
	validate: function(atributos){
		if(!atributos.titulo){
			return 'Debe tener titulo';
		}
	},
	initialize: function(){

		console.log('Se ha creado una nueva instancia de Libro');
		this.on('change',function(){
			console.log('El modelo ha cambiado');
		});
	},
	defaults:{
		autor : 'Desconocido' 
	},
	urlRoot: '/libros',
});
