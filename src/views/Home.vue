<template>
  <div class="home">
    Home
    <h-back-to-top />

    <h-icon icon="hbs-icon-close" />

    <h-button @click="handleClickVisible" />

    <h-modal
      title="这是模态框的标题"
      :visible="visible"
      @cancel="handleClickCancel"
      @confirm="handleClickConfirm"
    >
      <p>这是模态框的内容！</p>
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
