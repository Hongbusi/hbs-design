<template>
  <transition name="modal-fade">
    <div class="hbs-modal">
      modal
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HModal',

  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="less">
@import '../../styles/mixins/index';

.hbs-modal {
  .reset-component;
}

.modal-fade-enter-active {
  animation: modal-fade-in .3s;
}

.modal-fade-leave-active {
  animation: modal-fade-out .3s;
}

@keyframes modal-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes modal-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
