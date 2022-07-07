import type { App } from 'vue'
import registerComponents from './register-components'

export function globalRegister(app: App): void {
  app.use(registerComponents)
}
