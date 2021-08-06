import DefaultTheme from 'vitepress/theme'
import MPC from '@mpanda/mpc'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
  from '@fortawesome/vue-fontawesome' 
library.add(fas, far, fab) 
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MPCarousel', MPC.components.MPCarousel)
    app.component('MPPdfReader', MPC.components.MPPdfReader)
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.component('font-awesome-layers', FontAwesomeLayers)
    app.component('font-awesome-layers-text', FontAwesomeLayersText)
  }
}