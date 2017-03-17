import templateUrl from './seasonView.component.html'

/* @ngInject */
class SeasonViewController {
  constructor ($log, $seasonView, $stateParams, $season) {
    this.$state = $seasonView
    this.season = $stateParams.season
    $log.debut("SeasonViewController instantiated")
  }
}

export const seasonView = {
  templateUrl,
  controller: SeasonViewController,
  controllerAs: '$seasonView'
}