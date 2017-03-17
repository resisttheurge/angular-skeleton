import { seasons } from './seasons.component'
import { SeasonsService } from './seasons.service'
import { seasonView } from './seasonView/seasonView.component'
import { seasonViewService } from './seasonView/seasonView.service'
import { configure } from './seasons.config'

export default
  angular
    .module('seasons', [])
    .component('seasons', seasons)
    .service('$seasons', SeasonsService)
    .component('seasonView', seasonView)
    .service('$seasonView', seasonViewService)
    .config(configure)
    .name
