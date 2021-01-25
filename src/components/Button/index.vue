<template>
  <component
    :is="href ? 'NuxtLink' : 'button'"
    class="button"
    :class="{
      arrow: hasArrow,
      rounded: isRounded,
      media: isMedia,
      'hover-opacity': isHoverOpacity,
      'color-reverse': isColorReverse,
    }"
    :to="href && href"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "",
    },
    hasArrow: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: Boolean,
      default: false,
    },
    isMedia: {
      type: Boolean,
      default: false,
    },
    isHoverOpacity: {
      type: Boolean,
      default: false,
    },
    isColorReverse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  font-weight: bold;

  &.color-reverse {
    background-color: #ffffff;
    color: #000000;
  }

  &.arrow {
    &::after {
      content: "";
      display: block;
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 0;
      left: auto;
      width: 5.5rem;
      height: 0.9rem;
      transform: translate(22%, -50%);
      background: url("~assets/images/arrow_more.png") 0 0 / 100% auto no-repeat;

      @include media-pc {
        transform: translate(40%, -50%);
      }
    }
  }

  &.rounded {
    border-radius: 4rem;
  }

  &.media {
    background-color: #f5f5f1;
  }

  &.hover-opacity:hover {
    opacity: 0.7;
  }
}
</style>
