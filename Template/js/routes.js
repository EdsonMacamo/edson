angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.perfil', {
    url: '/Perfil',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu.disciplinasCorrentes', {
    url: '/disciplinas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/disciplinasCorrentes.html',
        controller: 'disciplinasCorrentesCtrl'
      }
    }
  })

  .state('menu.notas', {
    url: '/Notas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notas.html',
        controller: 'notasCtrl'
      }
    }
  })

  .state('menu.disciplinasPassadas', {
    url: '/disciplinasPassadas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/disciplinasPassadas.html',
        controller: 'disciplinasPassadasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('aInstituiO', {
    url: '/page8',
    templateUrl: 'templates/aInstituiO.html',
    controller: 'aInstituiOCtrl'
  })

$urlRouterProvider.otherwise('/page7')


});