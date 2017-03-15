import { seasons } from './seasons.component'
import { SeasonsService } from './seasons.service'
import { configure } from './seasons.config'

export default
  angular
    .module('seasons', [])
    .component('seasons', seasons)
    .service('$seasons', SeasonsService)
    .config(configure)
    .name
