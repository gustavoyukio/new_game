// Clicks
var panelHeader = document.querySelectorAll(".panel-header");
var panelBody 	= document.querySelectorAll(".panel-body");
var play 	= document.querySelectorAll('.gameTiming');
var timeoutTiming = 500;

for (var i = 0; i < panelHeader.length; i++ ) {
	panelHeader[i].addEventListener('click', function(e){

		var corpo = e.target.parentNode.parentNode.children[1];
		var classes = corpo.className.split(' ');
		var listaClasses = corpo.className;

		if ( classes[classes.length-1] != "panel-show") {
			corpo.className = corpo.className + " panel-show";
		} else {
			var a = classes.slice(0, classes.length-1).join(' ');
			corpo.className = a;
		}
	});
}

for (var i = 0; i < play.length; i++ ) {
	play[i].addEventListener('click', function(e) {
		if (e.target.getAttribute("class") == "play") {
			console.log("play");
			timeoutTiming = 500;
		} else {
			console.log("pause");
			timeoutTiming = 99999999999999999999;
		}
	});
}

/// FUNCAO PARA o jogo
var game = {
	init: function() {
		console.log('inicio');
	},
	continue: function() {
		console.log('oi');
	}
}

// Game Init
game.init();

// Items
var timing = window.setTimeout(function(){
  game.continue();
}, timeoutTiming);

///////////////////////////////////////////////////////////
// Angular Start
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