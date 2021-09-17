<template>
  <div class="hbs-popover">
    popover
    <slot name="content" />
  </div>
</template>

<script>
export default {
  name: 'HPopover',

  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },

    // 卡片内容
    content: {
      type: String,
      default: ''
    },

    width: {
      type: [String, Number],
      default: 150
    },

    // 气泡框位置
    placement: {
      type: String,
      default: 'top'
    },

    // 触发方式
    trigger: {
      type: String,
      default: 'click',
      validator: value => ['click', 'focus', 'hover', 'manual'].includes(value)
    }
  }
};
</script>

<style lang="less">

</style>
