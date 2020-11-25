<template>
  <svg :class="svgClass" aria-hidden="true" @click="clickHandler">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    'icon-class': {
      type: String,
      required: true
    },
    'class-name': {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      return this.className ? 'svg-icon ' + this.className : 'svg-icon';
    }
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
