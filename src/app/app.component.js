import templateUrl from './app.component.html'

/* @ngInject */
class AppController {
  constructor ($log, $location, $http, $sce) {
    $log.debug('AppController instantiated')
    this.$location = location
    this.$http = $http
    this.$sce = $sce
    this.scores = this.getRecentGames()
  }

 getRecentGames() {
    let recentGames = this
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/games/recent',
      headers: {
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/'
              }
    }).then(function successCallback(response) {
      recentGames = response.data
      console.log(recentGames)
      return recentGames
    }, function errorCallback(response) {
      return response
    })
  }

}

export const app = {
  templateUrl,
  controller: AppController,
  controllerAs: '$app'
}
