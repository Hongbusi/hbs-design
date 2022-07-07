import Theme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'

import { globalRegister } from './global'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(globalRegister)
  }
}
