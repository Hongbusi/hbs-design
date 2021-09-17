<template>
  <div class="home">
    Home
    <!-- <h-back-to-top /> -->

    <h-icon icon="hbs-icon-close" />

    <h-button @click="handleClickVisible" />

    <h-modal
      title="这是模态框的标题"
      :visible="visible"
      :width="700"
      :mask-closable="false"
      @cancel="handleClickCancel"
      @confirm="handleClickConfirm"
    >
      <p>这是模态框的内容！</p>
    </h-modal>

    <div class="js-back-to-top">
      <div class="back-to-top-container">

      </div>
      <h-back-to-top target=".js-back-to-top" />
    </div>
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
  height: 2000px;
}

.js-back-to-top {
  width: 400px;
  height: 400px;
  background-color: pink;
  overflow-y: auto;

  .back-to-top-container {
    width: 100%;
    height: 2000px;
    background: #fff;
  }
}
</style>
