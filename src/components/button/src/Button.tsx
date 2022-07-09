import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HButton',
  setup(props, { slots }) {
    return () => {
      return <button>
        { slots.default ? slots.default() : 'Button' }
      </button>
    }
  }
})
