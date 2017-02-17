import templateUrl from './app.component.html'

/* @ngInject */
class AppController {
  constructor ($log, $location, $http, $sce) {
    $log.debug('AppController instantiated')
    this.$location = location
    this.$http = $http
    this.$sce = $sce
    let recentGames = this.getRecentGames()
  }

  getRecentGames() {
    let games = []
    this.$http({
      method: 'GET',
      url: 'http://localhost:8080/games/recent',
      headers: {
                'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/'
              }
    }).then(function successCallback(response) {
      console.log(response.data)
      return response.data
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
