export class SeasonViewService {
  constructor ($log, $config, $http, $stateParams, $season) {
    'ngInject'
    this.$config = $config
    this.$http = $http
    this.$season
    // this.getMostRecentUsers
    // this.populateProfileInfo()
    $log.debug('SeasonViewService instantiated!')
    }
}