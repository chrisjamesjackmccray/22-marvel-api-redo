import 'es6-promise';
import 'whatwg-fetch';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import characters from './modules/characters';
import events from './modules/events';

let App = angular.module('app', ['ui.router', 'tiy.characters', 'tiy.events']);


function config($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/characters/Captain America')
}

App.config(config);
