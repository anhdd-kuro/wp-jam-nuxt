<template>
  <div class="farm">
    <div class="farm__sun">
      <img src="~assets/images/sun.png" alt="" class="" />
    </div>
    <div class="farm__field">
      <picture>
        <source
          media="(max-width:767px)"
          srcset="~assets/images/hatake_sp.png"
        />
        <img src="~assets/images/hatake.png" alt="" class="farm__field-bg" />
      </picture>
      <div class="farm__truck t-ft-animation__truck">
        <img
          src="~assets/images/truck_main.png"
          class="farm__truck-main t-ft-animation__main"
          alt=""
        />
        <img
          src="~assets/images/truck_wheel_02.png"
          class="farm__truck-wheel--01 t-ft-animation__wheel"
          alt=""
        />
        <img
          src="~assets/images/truck_wheel_02.png"
          class="farm__truck-wheel--02 t-ft-animation__wheel"
          alt=""
        />
        <img
          src="~assets/images/truck_smoke.png"
          class="farm__truck-smoke t-ft-animation__smoke"
          alt=""
        />
        <img
          src="~assets/images/vegetable_01.png"
          class="farm__truck-veg--01 t-ft-animation__get--01"
          alt=""
        />
        <img
          src="~assets/images/vegetable.png"
          class="farm__truck-veg--02 t-ft-animation__get--02"
          alt=""
        />
        <img
          src="~assets/images/vegetable_02.png"
          class="farm__truck-veg--03 t-ft-animation__get--03"
          alt=""
        />
        <img
          src="~assets/images/vegetable_02.png"
          class="farm__truck-veg--04 t-ft-animation__get--04"
          alt=""
        />
      </div>
      <img
        src="~assets/images/vegetable_01.png"
        alt=""
        class="farm__vegetable--01 t-ft-animation__vegetable--01"
      />
      <img
        src="~assets/images/vegetable.png"
        alt=""
        class="farm__vegetable--02 t-ft-animation__vegetable--02"
      />
      <img
        src="~assets/images/vegetable_01.png"
        alt=""
        class="farm__vegetable--03 t-ft-animation__vegetable--03"
      />
      <img
        src="~assets/images/vegetable.png"
        alt=""
        class="farm__vegetable--04 t-ft-animation__vegetable--04"
      />
      <img
        src="~assets/images/vegetable_01.png"
        alt=""
        class="farm__vegetable--05 t-ft-animation__vegetable--05"
      />

      <img
        src="~assets/images/vegetable_02.png"
        alt=""
        class="farm__vegetable--06 t-ft-animation__vegetable--06"
      />
      <img
        src="~assets/images/vegetable_02.png"
        alt=""
        class="farm__vegetable--07 t-ft-animation__vegetable--07"
      />
      <img
        src="~assets/images/vegetable_02.png"
        alt=""
        class="farm__vegetable--08 t-ft-animation__vegetable--08"
      />
      <img
        src="~assets/images/vegetable_02.png"
        alt=""
        class="farm__vegetable--09 t-ft-animation__vegetable--09"
      />
      <img
        src="~assets/images/vegetable_02.png"
        alt=""
        class="farm__vegetable--10 t-ft-animation__vegetable--010"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.farm {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100vw;

  &__field {
    position: relative;
    margin: 0 0 0 auto;
    overflow: hidden;

    @include media-pc {
      width: 107.7rem;
    }

    &-bg {
      width: 100%;
    }
  }

  &__sun {
    position: absolute;
    top: -70px;
    right: 40px;
    width: 5rem;
    max-width: 80px;
    height: 5rem;
    max-height: 80px;
    animation: rotate_sun 20s linear infinite;
    border-radius: 50%;

    @include media-pc {
      top: -100px;
      right: 90px;
      left: auto;
      width: 8rem;
      height: 8rem;
    }

    img {
      position: relative;
      z-index: 1;
      width: 100%;
      opacity: 0.6;
    }
    @supports not (-ms-high-contrast: none) {
      -webkit-mask-image: radial-gradient(
        rgba(0, 0, 0, 1) 35%,
        transparent 65%
      );
      mask-image: radial-gradient(rgba(0, 0, 0, 1) 35%, transparent 65%);

      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: center;
        border-radius: 50%;
      }

      &::before {
        animation: rotate_sun 60s linear infinite, scale_sun 3s linear infinite;
        background: repeating-conic-gradient(
          from 0deg,
          yellow 0deg 20deg,
          transparent 20deg 40deg
        );
      }

      &::after {
        transform: rotate(15deg);
        animation: rotate_sun 40s linear infinite;
        background: radial-gradient(yellow, transparent 80%);
        background-color: gold;
        -webkit-mask-image: radial-gradient(
          rgba(0, 0, 0, 1) 50%,
          transparent 65%
        );
        mask-image: radial-gradient(rgba(0, 0, 0, 1) 50%, transparent 65%);
      }
    }
  }

  &__truck {
    position: absolute;
    z-index: 1;
    right: 0;

    &-main {
      position: relative;
      z-index: 2;
      width: 8rem;

      @include media-pc {
        width: 13.5rem;
      }
    }

    &-veg {
      &--01 {
        position: absolute;
        top: 8%;
        right: 3%;
        width: 1.5rem;

        @include media-pc {
          width: 2.4rem;
        }
      }

      &--02 {
        position: absolute;
        top: 7%;
        right: 11%;
        width: 1.5rem;

        @include media-pc {
          width: 2.4rem;
        }
      }

      &--03 {
        position: absolute;
        top: 5%;
        right: 16%;
        width: 0.6rem;
        transform: rotate(-20deg);

        @include media-pc {
          width: calc-pc-size(9);
        }
      }

      &--04 {
        position: absolute;
        top: -4%;
        right: 3%;
        width: 0.6rem;
        transform: rotate(20deg);

        @include media-pc {
          width: 0.9rem;
        }
      }
    }

    &-smoke {
      position: absolute;
      top: 31%;
      right: -15%;
      width: 1rem;
      opacity: 0;

      @include media-pc {
        width: 18px;
      }

      img {
        width: 100%;
      }
    }

    &-wheel {
      &--01 {
        position: absolute;
        bottom: -8%;
        left: 32.5%;
        width: 1.7rem;

        @include media-pc {
          width: 3.1rem;
        }
      }

      &--02 {
        position: absolute;
        right: -5%;
        bottom: -8%;
        width: 1.7rem;

        @include media-pc {
          width: 3.1rem;
        }
      }
    }
  }

  &__vegetable {
    &--01,
    &--02,
    &--03,
    &--04,
    &--05 {
      width: 1.8rem;

      @include media-pc {
        width: 3rem;
        max-width: 30px;
      }
    }

    &--06,
    &--07,
    &--08,
    &--09,
    &--10 {
      width: 0.7rem;

      @include media-pc {
        width: 1.6rem;
      }
    }

    &--05 {
      position: absolute;
      right: 52%;
      bottom: 40%;

      @include media-pc {
        right: 35%;
      }
    }

    &--04 {
      position: absolute;
      right: 48%;
      bottom: 48%;

      @include media-pc {
        right: 32%;
      }
    }

    &--03 {
      position: absolute;
      right: 44%;
      bottom: 40%;

      @include media-pc {
        right: 29%;
      }
    }

    &--02 {
      position: absolute;
      right: 40%;
      bottom: 48%;

      @include media-pc {
        right: 26%;
      }
    }

    &--01 {
      position: absolute;
      right: 36%;
      bottom: 40%;

      @include media-pc {
        right: 23%;
      }
    }

    &--10 {
      position: absolute;
      right: 84%;
      bottom: 40%;

      @include media-pc {
        right: 60%;
      }
    }

    &--09 {
      position: absolute;
      right: 80%;
      bottom: 45%;

      @include media-pc {
        right: 57%;
      }
    }

    &--08 {
      position: absolute;
      right: 76%;
      bottom: 40%;

      @include media-pc {
        right: 54%;
      }
    }

    &--07 {
      position: absolute;
      right: 72%;
      bottom: 45%;

      @include media-pc {
        right: 51%;
      }
    }

    &--06 {
      position: absolute;
      right: 68%;
      bottom: 40%;

      @include media-pc {
        right: 48%;
      }
    }
  }
}
</style>
