<template>
  <button class="hbs-button" @click="handleClick">
    default
  </button>
</template>

<script>
export default {
  name: 'HButton',

  methods: {
    handleClick(e) {
      this.$emit('click', e);
    }
  }
};
</script>

<style lang="less">
@import '../../styles/mixins/index';

.hbs-button {
  .reset-component;
}
</style>
