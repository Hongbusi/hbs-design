import type { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'default' | 'primary'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
