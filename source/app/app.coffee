'use strict'

angular.module 'testApp', [
  # from bendystraw
  'bendy.templates' # Angular templateCache file
  'bendy.env' # ENV and NODE_ENV

  'restangular'
  'ui.router'
  'testApp.dashboard'
]

.config ($httpProvider, $provide, $urlRouterProvider, $stateProvider, RestangularProvider, ENV, NODE_ENV) ->
  console.log 'app config', ENV, NODE_ENV

  $stateProvider
    .state 'main',
      abstract: true
      templateUrl: 'app/layouts/main.html'
      controller: 'appController'

  $urlRouterProvider.otherwise('/dashboard')

  RestangularProvider.setDefaultHeaders('Content-Type': 'application/json')

.controller 'appController', ($rootScope, $scope) ->
  console.log 'app controller'
