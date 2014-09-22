/**
 * Created by joriscalabrese on 22/09/2014.
 */
'use strict';

angular.module('myApp', ['ngRoute'])

	.controller('HelloWorldCtrl', function($scope) {
		$scope.hello = "Hello World";
	});
