export class AppService {
  initialized = false

  constructor ($log, $http, $state) {
    'ngInject'
    this.$http = $http
    $log.debug('AppService instantiated!')
  }

}
