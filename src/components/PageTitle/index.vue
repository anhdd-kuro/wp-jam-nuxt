<template>
  <h2 class="page-ttl">
    <span :class="categoryClass"> {{ title }} </span>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { useCategoryClass } from "@/helper/shared";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "",
    },
  },
  setup({ category }) {
    const categoryClass = useCategoryClass(category);

    return { categoryClass };
  },
});
</script>

<style lang="scss" scoped>
.page-ttl {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0 24px;
  font-size: 2.2rem;

  span {
    position: relative;

    &::before,
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }

    &.type-red {
      &::before,
      &::after {
        width: 3.6rem;
        height: 3.6rem;
        background: url("~assets/images/ichigo.png") 0 0/100% auto no-repeat;

        @include media-pc {
          width: 46px;
          height: 46px;
        }
      }

      &::before {
        transform: translate(calc(-100% - 20px), calc(-50%)) rotate(0deg);
      }

      &::after {
        transform: translate(calc(100% + 20px), calc(-50%)) rotate(-50deg);
      }
    }

    &.type-orange {
      &::before,
      &::after {
        --ttl-translate-x: 3px;
        --ttl-translate-y: -6px;

        width: 44px;
        height: 46px;
        background: url("~assets/images/carrot.png") 0 0/100% auto no-repeat;

        @include media-pc {
          width: 65px;
          height: 80px;

          --ttl-translate-y: 0%;
          --ttl-translate-x: 15px;
        }
      }

      &::before {
        transform: translate(calc(-100% - 3px), calc(-50% - 6px)) rotate(-20deg);

        @include media-pc {
          transform: translate(calc(-100% - 15px), calc(-50%)) rotate(-20deg);
        }
      }

      &::after {
        transform: translate(calc(100% + 3px), calc(-50% - 6px)) rotate(-58deg);
        @include media-pc {
          transform: translate(calc(100% + 15px), calc(-50%)) rotate(-58deg);
        }
      }
    }

    &.type-purple {
      &::before,
      &::after {
        width: 36px;
        height: 55px;
        background: url("~assets/images/nasu.png") 0 0/100% auto no-repeat;

        @include media-pc {
          width: 47px;
          height: 71px;
        }
      }

      &::before {
        transform: translate(calc(-100% - 20px), calc(-50% - 12px))
          rotate(20deg);

        @include media-pc {
          transform: translate(calc(-100% - 20px), calc(-50% - 12px))
            rotate(20deg);
        }
      }

      &::after {
        transform: translate(calc(100% + 18px), calc(-50% - 12px))
          rotate(-50deg);

        @include media-pc {
          transform: translate(calc(100% + 18px), calc(-50% - 12px))
            rotate(-50deg);
        }
      }
    }

    &.type-green {
      &::before,
      &::after {
        width: 44px;
        height: 55px;
        margin: 0 -20px;
        background: url("~assets/images/daizu.png") 0 0/100% auto no-repeat;

        @include media-pc {
          width: 65px;
          height: 100px;
        }
      }

      &::before {
        transform: translate(calc(-100% - 20px), calc(-50% - 5px)) rotate(0deg);

        @include media-pc {
          transform: translate(calc(-100% - 20px), calc(-50% - 5px))
            rotate(0deg);
        }
      }

      &::after {
        margin: 0 -20px;
        transform: translate(calc(100% + 18px), calc(-50% - 5px)) rotate(-60deg);

        @include media-pc {
          transform: translate(calc(100% + 18px), calc(-50% - 5px))
            rotate(-60deg);
        }
      }
    }
  }

  @include media-pc {
    margin-top: 116px;
    font-size: 37px;
  }
}
</style>
