import type { App } from 'vue'

// vitepress-theme-demoblock
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

// hbs-design
import Button from '../../../src/components/button/src/button'

export default function (app: App): void {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component('HButton', Button)
}
