// Clicks
var panelHeader = document.querySelectorAll(".panel-header");
var panelBody 	= document.querySelectorAll(".panel-body");

for (var i = 0; i < panelHeader.length; i++ ) {
	panelHeader[i].addEventListener('click', function(e){

		var corpo = e.target.parentNode.parentNode.children[1];
		var classes = corpo.className.split(' ');
		var listaClasses = corpo.className;
		console.log(classes[classes.length-1]);

		if ( classes[classes.length-1] != "panel-show") {
			corpo.className = corpo.className + " panel-show";
		} else {
			var a = classes.slice(0, classes.length-1).join(' ');
			console.log("X=>" + a);
			corpo.className = a;
		}
	});
}


// Start
var app = angular.module("myApp", []);

// Funcao para o arquivo
var files = {
	settings: {
		contr: "static/js/controllers",
		model: "static/js/model"
	},
	escreverController: function(name) {
		var s = this.settings;
		var include = "<script src='"+s.contr+"/"+name+".js'></script>";
		document.write(include);
	},
	escreverModel: function(name) {
		var s = this.settings;
		var include = "<script src='"+s.model+"/"+name+".js'></script>";
		document.write(include);
	}
}

// Escrever Arquivos
files.escreverController('MainController');