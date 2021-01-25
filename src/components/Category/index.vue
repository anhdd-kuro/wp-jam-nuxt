<template>
  <div class="category" :class="categoryClass">
    {{ category }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useCategoryClass } from "@/helper/shared";

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true,
    },
  },
  setup({ category }) {
    const categoryClass = useCategoryClass(category);

    return {
      categoryClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.category {
  display: inline-block;
  position: relative;
  padding: 8px 25px;
  border: 1px solid;
  border-radius: 20px;
  background-color: white;
  font-size: 1.2rem;
  font-weight: bold;

  @include media-pc {
    padding: 0.8rem 2.5rem;
    font-size: 1.2rem;
  }

  &::before {
    display: block;
    position: absolute;
    z-index: 2;
    top: 0;
    left: -1.4rem;
  }

  &.type-red {
    border-color: $red-primary;
    color: $red-primary;

    &::before {
      content: "";
      width: 3.5rem;
      height: 3.6rem;
      transform: translate(0, -30%);
      background: url("~assets/images/ichigo.png") 0 0 / 100% auto no-repeat;

      @include media-pc {
        width: 3.8rem;
        height: 3.8rem;
      }
    }
  }

  &.type-orange {
    border-color: $orange-primary;
    color: $orange-primary;

    &::before {
      content: "";
      width: 4.6rem;
      height: 5.4rem;
      transform: translate(0, -48%);
      background: url("~assets/images/carrot.png") 0 0 / 100% auto no-repeat;
    }
  }

  &.type-purple {
    border-color: $purple-primary;
    color: $purple-primary;

    &::before {
      content: "";
      width: 2.9rem;
      height: 4.8rem;
      transform: translate(0, -42%);
      background: url("~assets/images/nasu.png") 0 0 / 100% auto no-repeat;
    }
  }

  &.type-green {
    border-color: $green-primary;
    color: $green-primary;

    &::before {
      content: "";
      width: 4rem;
      height: 6rem;
      transform: translate(0, -42%);
      background: url("~assets/images/daizu.png") 0 0 / 100% auto no-repeat;
    }
  }
}
</style>
