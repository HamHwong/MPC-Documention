import DefaultTheme from 'vitepress/theme'
import MPC from '@mpanda/mpc'
import '@mpanda/mpc/lib/mpc.css'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MPC)
  }
}