<template>
  <footer class="footer">
    <section class="footer__recruit">
      <div class="footer__rect-box">中途/新卒/パート募集中</div>
      <h2 class="footer__recruit-ttl">
        <img
          src="~assets/images/recruit_ttl.svg"
          alt="Oisix Ra Daichi Recruitment"
        />
      </h2>
      <h3 class="footer__intro">
        これからの食卓と、<br />
        これからの畑をつくっていく
      </h3>
      <NuxtLink to="/" class="footer__recruit-btn">
        採用サイトはこちら
      </NuxtLink>
      <div class="footer__img">
        <img
          src="~assets/images/footer_img.jpg"
          alt="Oisix Ra Daichi Recruitment"
        />
      </div>
    </section>
    <div class="o-block-center footer__nav only-pc">
      <Nav />
    </div>
    <nav class="o-block-center footer__nav only-sp">
      <h2 class="nav__item">
        <NuxtLink to="./articles/?category=仕事と人" class="type-red">
          仕事と人
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
        <NuxtLink to="./articles/?category=メディア掲載" class="type-brown">
          メディア掲載
        </NuxtLink>
      </h2>
    </nav>
    <div class="footer__main o-block-center">
      <div class="footer__social">
        <a
          href="https://www.oisixradaichi.co.jp/"
          class="footer__collab"
          target="_blank"
          rel="noopener noreferrer"
          >オイシックス・ラ・大地 コーポレートサイト</a
        >
        <ul class="footer__sns">
          <li class="footer__sns-item">
            <a
              href="https://www.instagram.com/oisix/?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~assets/images/insta.png" alt="Oisix Instagram" />
            </a>
          </li>
          <li class="footer__sns-item">
            <a
              href="https://note.com/oisixradaichi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~assets/images/note.png" alt="Oisix Note" />
            </a>
          </li>
          <li class="footer__sns-item">
            <a
              href="http://creators.oisix.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~assets/images/bing.png" alt="Oisix Bing" />
            </a>
          </li>
          <li class="footer__sns-item">
            <a
              href="https://www.pinterest.jp/oisixradaichidesignfarm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="~assets/images/shut.png" alt="Oisix Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer__logo only-sp">
        <img
          src="~assets/images/logo_footer_sp.svg"
          alt="Oisix Ra Daichi が届けるマガジンサイト"
        />
      </div>
      <div class="footer__tags">
        <h3 class="footer__tags-ttl font-montserrat u-fbold">Tags</h3>
        <div class="footer__tags-wrapper">
          <TagComponent v-for="(tag, index) in tags" :key="index" :tag="tag" />
        </div>
      </div>
    </div>
    <p class="footer__credit font-montserrat o-block-center">
      © Oisix ra daichi Inc.
    </p>
    <Farm />
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import TagComponent from "@/components/Tag/index.vue";
import { Tag } from "@/types/tag";
import Nav from "../components/nav.vue";
import Farm from "./components/farm.vue";

export default defineComponent({
  components: {
    Farm,
    Nav,
    TagComponent,
  },
  props: {
    tags: {
      type: Array as PropType<Tag[]>,
      default: [],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  margin-top: 60px;
  padding: 30px 0 14rem;

  @include media-pc {
    margin-top: 200px;
    padding: 60px 0 160px;
  }

  &__rect-box {
    display: inline-block;
    margin-bottom: 22px;
    padding: 8px 18px;
    border-radius: 40px;
    background-color: white;
    color: $green-bg;
    font-size: 1.1rem;
    font-weight: bold;

    @include media-pc {
      margin-bottom: 38px;
      font-size: 11px;
    }
  }

  &__recruit {
    position: relative;
    margin-right: 2.5rem;
    padding: 25.6rem 2.4rem 5rem;
    background-color: $green-bg;
    color: white;

    @include media-pc {
      width: 100rem;
      max-width: 1200px;
      padding: 84px 0 120px 10rem;
    }
    @include media-min(#{($pc-max)}px) {
      padding-left: calc(50% - 700px + 100px);
    }

    &-ttl {
      width: 17.5rem;

      @include media-pc {
        width: 21.8rem;
      }

      img {
        width: 100%;
      }
    }

    &-btn {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 29.5rem;
      height: 70px;
      margin-top: 50px;
      border-radius: 40px;
      background-color: $gray-bg-dark;
      color: white;
      font-size: 1.6rem;
      font-weight: bold;

      @include media-pc {
        width: 34rem;
        max-width: 340px;
        height: 70px;
        margin-top: 80px;
        font-size: 1.6rem;
      }

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 12rem;
        height: 5.4rem;
        transform: translate(3%, -40%);
        background: url("~assets/images/recruit_btn.png") 0 0 / 100% auto
          no-repeat;

        @include media-pc {
          width: 16rem;
          height: 9.6rem;
          transform: translate(-15%, -28%);
        }
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 7.8rem;
        height: 5rem;
        transform: translate(22%, 30%);
        background: url("~assets/images/recruit_arr.png") 0 0 / 100% auto
          no-repeat;

        @include media-pc {
          width: 8.3rem;
          height: 4.8rem;
          transform: translate(22%, 22%);
        }
      }
    }
  }

  &__intro {
    margin-top: 20px;
    font-size: 2rem;
    line-height: #{(36/20)}em;

    @include media-pc {
      margin-top: 30px;
      font-size: 3.2rem;
      line-height: #{(54/30)}em;
    }
  }

  &__img {
    position: absolute;
    top: -2.5rem;
    right: -2.5rem;
    width: 35rem;

    @include media-pc {
      width: 70rem;
      transform: translate(percentage(100/700), percentage(-60/504));
    }

    img {
      width: 100%;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 120px;

    @include media-sp {
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 75px;
      padding: 0 3rem;

      .c-nav__item {
        margin-right: 3.2rem;
        font-size: 1.4rem;

        &:first-child {
          margin-bottom: 32px;
        }
      }
    }

    @include media-pc {
      width: 120rem;
      margin: 45px auto 0;
    }
  }

  &__tags {
    width: 54rem;

    @include media-sp {
      width: 100%;
    }

    &-ttl {
      font-size: 26px;

      @include media-sp {
        margin-bottom: 10px;
        font-size: 2.6rem;
      }
    }

    &-wrapper {
      margin-top: 1.6rem;
    }
  }

  &__main {
    display: flex;
    justify-content: space-between;
    margin-top: 45px;

    @include media-pc {
      width: 120rem;
      margin: 45px auto 0;
    }

    @include media-sp {
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 0 2rem;
    }
  }

  &__logo {
    width: 100%;
    margin-top: 3.6rem;
    padding-top: 3.6rem;
    border-top: 1px solid #e3e3e3;

    img {
      width: 22.4rem;
      margin: auto;
    }
  }

  &__collab {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding: 1.4rem 2.6rem;
    border: 2px solid white;
    border-radius: 40px;
    font-size: 1.1rem;
    font-weight: bold;

    @include media-pc {
      padding: 20px 3rem;
      border: 3px solid white;
      font-size: 1.4rem;
    }

    &::after {
      content: "";
      display: inline-block;
      width: calc-sp-size(17);
      height: 1.4rem;
      max-height: 14px;
      margin: 0 0 0 10px;
      background: url("~assets/images/link_icon.png") 0 0 / 100% auto no-repeat;
    }
  }

  &__social {
    display: flex;
    flex-direction: column;
    padding-top: 32px;

    @include media-sp {
      width: 100%;
    }
  }

  &__sns {
    display: flex;
    margin-top: 52px;

    @include media-sp {
      justify-content: center;
      margin-top: 35px;
    }

    &-item {
      display: inline-block;
      width: 5rem;
      height: 5rem;

      img {
        width: 100%;
      }

      & + & {
        margin-left: 15px;
      }

      a {
        display: block;
      }
    }
  }

  &__credit {
    margin-top: 35px;
    color: $gray-cre;
    font-size: 11px;
    font-weight: bold;
    text-align: center;

    @include media-pc {
      width: 120rem;
      margin: 70px auto 0;
      text-align: left;
    }
  }
}
</style>
