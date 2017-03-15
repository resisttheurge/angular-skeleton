export class HomeService {
  initialized = false

  constructor ($log, $http, $state) {
    'ngInject'
    this.$http = $http
    this.$state = $state
    $log.debug('HomeService instantiated!')
  }

}
