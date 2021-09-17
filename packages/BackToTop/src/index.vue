<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="hbs-back-to-top"
      :style="{
        'right': styleRight,
        'bottom': styleBottom
      }"
      @click.stop="handleClick"
    >
      <slot>
        <h-icon icon="hbs-icon-top" />
      </slot>
    </div>
  </transition>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'HBackToTop',

  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },

    target: [String],

    right: {
      type: Number,
      default: 40
    },

    bottom: {
      type: Number,
      default: 40
    }
  },

  data() {
    return {
      el: null,
      container: null,
      visible: false
    }
  },

  computed: {
    styleRight() {
      return `${this.right}px`;
    },

    styleBottom() {
      return `${this.bottom}px`;
    }
  },

  mounted() {
    this.init();

    this.getScrollTop();

    this.throttledScrollHandler = debounce(() => {
      this.getScrollTop();
    }, 100);

    this.container.addEventListener('scroll', this.throttledScrollHandler);
  },

  methods: {
    init() {
      this.container = document;
      this.el = document.documentElement;

      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },

    getScrollTop() {
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },

    handleClick(e) {
      this.scrollToTop();
      this.$emit('click', e);
    },

    scrollToTop() {
      this.el.scrollTo({ top: 0, behavior: 'smooth' });
    },

    beforeDestroy() {
      this.container.removeEventListener('scroll', this.throttledScrollHandler);
    }
  }
}
</script>

<style lang="less">
.hbs-back-to-top {
  position: fixed;
  z-index: 1;
  cursor: pointer;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #46c37b;
  border-radius: 50%;
  transform: all 0.3 ease;
  color: #fff;

  &:hover {
    background-color: fade(#46c37b, 80%);
    transform: all 0.3 ease;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
