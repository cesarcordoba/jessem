var app = angular.module('myapp');

app.controller('proyectosCtrl', function($scope, $rootScope, $http, $mdDialog, mdDialog, $timeout, $mdSidenav, $state, $stateParams, Proyecto, Imagen) {

	var self = this;
	self.muestra = true;

	class Proyectos_{
		constructor(){
			this.item = {}
			this.items = [],
			this.obtener()
		}
		obtener(){
			Proyecto.obtener()
			.then(res => res.data.map(n => new Proyecto_(n)))
			.then(res => this.agregarProyecto(res))
		}

		agregarProyecto(arrray){
			arrray.forEach(n => this.items.push(n))
			$scope.$digest();

			console.log(self.proyectos.items)
		}

		mandarInfo(proyecto){
			console.log(proyecto)
			self.proyectos.item = proyecto;
			var contenedor = ($('.contenedor-secundario'))
			TweenLite.to(contenedor, .3, {width:'100%', height:'100%'})
			self.muestra = false;
		}

		cerrar(){
			var contenedor = ($('.contenedor-secundario'))
			TweenLite.to(contenedor, .3, {width:'0%', height:'100%'})
			self.muestra = true;
		}
	}
	self.proyectos = new Proyectos_();

	class Proyecto_{
		constructor(arg){
			this.id = arg.id,
			this.nombre = arg.nombre,
			this.descripcion = arg.descripcion,
			this.imagenes(),
			this.servicios()
		}

		async imagenes(){
			await Imagen.obtenerDeproyectos(this.id)
			.then(res =>this.imagenes = res.data)
			.then(() => $scope.$digest())
		}

		async servicios(){
			await Proyecto.obtenerServicios(this.id)
			.then(res => this.servicios = res.data)
			.then(() => $scope.$digest())
		}
	}
});
