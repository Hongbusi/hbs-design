<template>
  <div>
    <transition name="mask-fade">
      <div class="hbs-modal-mask" v-show="visible" @click="handleClickCancel" />
    </transition>

    <transition name="modal-fade">
      <div class="hbs-modal-wrapper" v-show="visible">
        <div class="hbs-modal">
          <div class="hbs-modal-content">
            <button class="hbs-modal-close" @click="handleClickCancel">
              <span class="hbs-modal-close-x">
                <h-icon icon="hbs-icon-close" />
              </span>
            </button>
            <div class="hbs-modal-header">title</div>
            <div class="hbs-modal-body">body</div>
            <div class="hbs-modal-footer" v-if="footer">
              <slot name="footer">
                <h-button @click="handleClickCancel">default</h-button>
                <h-button>default</h-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HModal',

  props: {
    title: {
      type: String,
      default: ''
    },

    visible: {
      type: Boolean,
      default: false
    },

    footer: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    handleClickCancel() {
      this.$emit('cancel');
    },

    handleClickConfirm() {
      this.$emit('confirm');
    }
  }
}
</script>

<style lang="less">
@import '../../styles/mixins/index';

.hbs-modal-mask,
.hbs-modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}

.hbs-modal-mask {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
}

.hbs-modal-wrapper {
  overflow: auto;
}

.hbs-modal {
  .reset-component;

  position: relative;
  top: 100px;
  padding-bottom: 24px;
  margin: 0 auto;
  width: 500px;

  &-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }

  &-close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    color: rgba(0, 0, 0, .45);
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color .3s;
    background: transparent;

    &-x {
      display: block;
      width: 54px;
      height: 54px;
      font-size: 18px;
      font-style: normal;
      line-height: 54px;
      text-align: center;
      text-transform: none;
      text-rendering: auto;
    }

    &:hover {
      color: rgba(0, 0, 0, .75);
    }
  }

  &-header {
    padding: 16px 24px;
    margin: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    word-wrap: break-word;
    color: rgba(0, 0, 0, .85);
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    border-radius: 4px 4px 0 0;
  }

  &-body {
    padding: 24px;
    word-wrap: break-word;
  }

  &-footer {
    padding: 10px 16px;
    text-align: right;
    border-top: 1px solid #f0f0f0;
    border-radius: 0 0 2px 2px;

    button + button {
      margin-left: 8px;
    }
  }
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

.mask-fade-enter-active {
  animation: mask-fade-in .3s;
}

.mask-fade-leave-active {
  animation: mask-fade-out .3s;
}

@keyframes mask-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes mask-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
