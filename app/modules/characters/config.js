function config($stateProvider) {
  $stateProvider
    .state('characters',{
      url: '/characters/:name',
      controller: "CharactersController as charCtrl",
      template: require('./character.html')
    });
}

export default config;
