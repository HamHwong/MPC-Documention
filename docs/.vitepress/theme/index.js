import DefaultTheme from 'vitepress/theme'
import MPC from '@mpanda/mpc'
import '@mpanda/mpc/lib/mpc.css'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MPC)
    app.component('FontAwesomeIcon',FontAwesomeIcon)
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.module.rule('vue').uses.delete('cache-loader');
      config.module.rule('js').uses.delete('cache-loader');
      config.module.rule('ts').uses.delete('cache-loader');
      config.module.rule('tsx').uses.delete('cache-loader');
    }
  }
}