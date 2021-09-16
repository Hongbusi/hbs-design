<template>
  <button class="hbs-button">
    default
  </button>
</template>

<script>
export default {
  name: 'HButton'
};
</script>

<style lang="less">
@import '../../styles/mixins/index';

.hbs-button {
  .reset-component;
}
</style>
