import templateUrl from './home.component.html'

/* @ngInject */
class HomeController {
  constructor ($home, $state, $log) {
    this.$state = $home
    $log.debug('HomeController instantiated')
  }

}

export const home = {
  templateUrl,
  controller: HomeController,
  controllerAs: '$home'
}
