<template>
  <div class="nav">
    <h1 class="nav__logo">
      <NuxtLink to="./ordig/">
        <picture>
          <source
            media="(max-width:768px)"
            srcset="~assets/images/logo_sp.svg"
          />
          <img
            src="~assets/images/logo.svg"
            alt="ORDig - Oisix Ra Daichi が届けるマガジンサイト"
          />
        </picture>
      </NuxtLink>
    </h1>
    <nav class="nav__list only-pc">
      <h2 class="nav__item">
        <NuxtLink to="./articles/?category=仕事と人" class="type-red"
          >仕事と人
        </NuxtLink>
      </h2>
      <h2 class="nav__item">
        <NuxtLink
          to="./articles/?category=カルチャーと働き方"
          class="type-orange"
        >
          カルチャーと働き方
        </NuxtLink>
      </h2>
      <h2 class="nav__item">
        <NuxtLink to="./articles/?category=プロジェクト" class="type-purple">
          プロジェクト
        </NuxtLink>
      </h2>
      <h2 class="nav__item">
        <NuxtLink to="./articles/?category=特集" class="type-green">
          特集
        </NuxtLink>
      </h2>
      <h2 class="nav__item">
        <NuxtLink to="./media/" class="type-brown">メディア掲載</NuxtLink>
      </h2>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;

  @include media-pc {
    width: 120rem;
    margin: 3rem auto 0;
    padding: 2rem 0;
  }

  &__logo {
    width: 26rem;
    margin: 0 auto;

    @include media-pc {
      width: 41.5rem;
      margin: 0;
    }

    img {
      width: 100%;
    }
  }

  &__list {
    display: flex;
    font-weight: bold;
  }

  &__item {
    position: relative;

    @include media-pc {
      font-size: 1.4rem;
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }

    a:hover {
      opacity: 1;

      &::before {
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0) scale(0.5);
      }

      &.type-red {
        color: $red-primary;

        &::before {
          content: url("~assets/images/ichigo_top.png");
        }
      }

      &.type-orange {
        color: $orange-primary;

        &::before {
          content: url("~assets/images/carrot_top.png");
        }
      }

      &.type-purple {
        color: $purple-primary;

        &::before {
          content: url("~assets/images/nasu_top.png");
        }
      }

      &.type-green {
        color: $green-primary;

        &::before {
          content: url("~assets/images/daizu_top.png");
        }
      }

      &.type-brown {
        color: $brown-primary;

        &::before {
          content: url("~assets/images/lemon_top.png");
        }
      }
    }
  }
}
</style>
