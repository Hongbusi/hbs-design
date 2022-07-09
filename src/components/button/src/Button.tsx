import { defineComponent, toRefs } from 'vue'
import { type ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'HButton',

  props: buttonProps,

  setup(props: ButtonProps, { slots }) {
    const { type } = toRefs(props)

    return () => {
      // eslint-disable-next-line react/no-unknown-property
      return <button class={`h-btn g-btn--${type.value}`}>
        { slots.default ? slots.default() : 'Button' }
      </button>
    }
  }
})
