import { seasons } from './seasons.states'

/* @ngInject */
export function configure ($stateProvider) {
  $stateProvider
    .state(seasons)
}
