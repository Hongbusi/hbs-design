import type { App } from 'vue'
import ButtonPlugin, { Button } from '../src/components/button'

const installs = [ButtonPlugin]

export {
  Button
}

export default {
  version: '1.0.1',
  install(app: App): void {
    installs.forEach(plugin => app.use(plugin))
  }
}
