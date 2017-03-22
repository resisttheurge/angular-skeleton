import templateUrl from './seasons.component.html'

/* @ngInject */
class SeasonsController {
  constructor ($seasons, $state, $log) {
    this.$state = $seasons
    $log.debug('SeasonsController instantiated')
  }

}

export const seasons = {
  templateUrl,
  controller: SeasonsController,
  controllerAs: '$seasons'
}
