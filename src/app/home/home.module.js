import { home } from './home.component'
import { HomeService } from './home.service'
import { configure } from './home.config'

export default
  angular
    .module('bmfflHome', [])
    .component('bmfflHome', home)
    .service('$home', HomeService)
    .config(configure)
    .name
