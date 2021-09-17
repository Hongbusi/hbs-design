<template>
  <div class="home">
    <h-button @click="handleClickVisible">show modal</h-button>

    <h-modal
      title="这是模态框的标题"
      :visible="visible"
      :width="520"
      :mask-closable="false"
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
