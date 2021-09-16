<template>
  <svg class="hbs-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'HIcon',

  props: {
    icon: {
      type: String,
      required: true
    }
  },

  computed: {
    iconName() {
      return `#${this.icon}`;
    }
  }
};
</script>

<style>
.hbs-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
