<template>
  <div class="home">
    Home
    <h-back-to-top />

    <h-icon icon="hbs-icon-close" />

    <h-button />

    <button @click="handleClickVisible">show modal</button>

    <h-modal
      title="这是一个模态框"
      :visible="visible"
      @cancel="handleClickCancel"
      @confirm="handleClickConfirm"
    >
    </h-modal>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      visible: false
    }
  },

  methods: {
    handleClickVisible() {
      this.visible = true;
    },

    handleClickCancel() {
      this.visible = false;
    },

    handleClickConfirm() {
      this.visible = false;
    }
  }
}
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
</style>
