<template>
  <section class="article-top">
    <div class="article-top__card">
      <NuxtLink
        :to="`posts/${post.id}`"
        class="article-top__overlay"
        target="_blank"
      >
        <div class="article-top__img">
          <img
            v-if="post.image.full"
            :src="post.image.full.source_url"
            alt="ポスト画像"
          />
        </div>
        <Category class="article-top__type" :category="post.category" />
        <div class="article-top__txt">
          <h4 class="article-top__ttl u-fbold">
            {{ post.title }}
          </h4>
          <div class="article-top__cont">
            <p>
              「俺たちがビジネスをやることで、ビフォーアフターみたいに社会がより良くなる……みたいなこと
            </p>
          </div>
          <p class="article-top__date font-montserrat">{{ post.date }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import { PropType, defineComponent } from "@nuxtjs/composition-api";
import { Post } from "@/types/post";
import Category from "@/components/Category/index.vue";

export default defineComponent({
  components: {
    Category,
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.article-top {
  position: relative;

  @include media-sp {
    margin: 30px 1rem;
  }

  @include media-pc {
    width: 72rem;
    margin-top: 65px;
    padding: 0 percentage(100 / $pc-max);
    background-color: #ffffff;
  }

  @include media-min(#{$pc-max}px) {
    box-sizing: border-box;
    width: calc(500px + 50% - 700px + 200px);
    padding: 0 100px 0 calc(50% - 700px + 100px);
  }

  &__card {
    position: relative;
    height: 100%;
    background-color: white;

    @include media-pc {
      max-width: 512px;
    }
  }

  &__img {
    position: relative;
    height: 18.6rem;
    overflow: hidden;

    @include media-pc {
      position: absolute;
      top: 50%;
      right: -65px;
      width: 64rem;
      height: 34rem;
      transform: translate(100%, -50%);
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
    }
  }

  &__ttl {
    font-size: 1.8rem;
    line-height: #{(28.8/18)}em;

    @include media-pc {
      font-size: 3rem;
      line-height: #{(46/30)}em;
    }
  }

  &__cont {
    position: relative;
    margin-top: 14px;
    overflow: hidden;
    font-size: 1.2rem;
    line-height: #{(24/12)}em;

    & > * {
      display: none;
    }

    p:first-of-type {
      display: inline-block;
      height: 4.2em;
      overflow: hidden;

      &::after {
        content: "…続きを見る";
        display: inline-block;
        right: 0;
        bottom: 0;
        padding: 0 0 0 1px;
        background: white;
      }
    }

    @include media-pc {
      margin-top: 10px;
      font-size: 1.5rem;
      line-height: #{(32/15)}em;
    }
  }

  &__type {
    margin: 1.6rem 0 0 1.6rem;

    @include media-pc {
      margin: 40px 0 0 10px;
    }
  }

  &__txt {
    padding: 1.2rem 2rem 3rem;

    @include media-pc {
      padding: 30px 0 40px;
    }
  }

  &__date {
    margin-top: 10px;
    color: $gray-b7;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
  }
}
</style>
