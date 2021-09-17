<template>
  <button :class="className" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'HButton',

  props: {
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'warning'].includes(value);
      }
    },

    size: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'small', 'large'].includes(value);
      }
    }
  },

  computed: {
    className() {
      let className = 'hbs-btn';

      const { type, size } = this;

      type !== 'default' && (className += ` hbs-btn-${type}`);
      size !== 'default' && (className += ` hbs-btn-${size}`);

      return className;
    }
  },

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="less" scoped>
.hbs-btn {
  display: inline-block;
  padding: 0 16px;
  height: 36px;
  line-height: 1;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: #666;
  background-color: #fff;
  border-color: #ebebeb;
  user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
    border-color: #46c37b;
    color: #46c37b;
  }

  &-primary {
    color: #fff;
    border-color: #46c37b;
    background-color: #46c37b;

    &:hover {
      background-color: fade(#46c37b, 80%);
      border-color: fade(#46c37b, 80%);
      color: #fff;
    }
  }

  &-warning {
    color: #fff;
    border-color: #f7da5c;
    background-color: #f7da5c;

    &:hover {
      background-color: fade(#f7da5c, 80%);
      border-color: fade(#f7da5c, 80%);
      color: #fff;
    }
  }

  &-small {
    height: 24px;
    padding: 0 12px;
    font-size: 14px;
  }

  &-large {
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
  }
}
</style>
