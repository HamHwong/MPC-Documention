import DefaultTheme from 'vitepress/theme'
import MPC from '@mpanda/mpc'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(MPC)
  }
}