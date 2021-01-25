<template>
  <section class="media">
    <h2 class="media__ttl u-fbold">メディア情報</h2>
    <ul class="media__list">
      <li v-for="post in posts" :key="post.id" class="media__item">
        <NuxtLink to="" target="_blank">
          <div class="media__img">
            <img :src="post.image.full.source_url" alt="" />
          </div>
          <div class="media__txt">
            <p class="media__date font-montserrat">
              {{ post.date }}
            </p>
            <p class="media__post-ttl">
              {{ post.title }}
            </p>
            <p class="media__lead">
              {{ post.meta_custom.media_text }}
            </p>
            <p class="media__url font-montserrat">
              {{ post.meta_custom.media_link }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <Button
      class="media__more"
      :has-arrow="true"
      :is-rounded="true"
      href="/medias"
    >
      MORE
    </Button>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { MediaPost } from "@/types/mediaPosts";
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: {
    Button,
  },
  props: {
    posts: {
      type: Array as PropType<MediaPost[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.media {
  margin: 30px 1rem 65px;
  padding: 3.6rem 1.5rem;
  background-color: white;

  @include media-pc {
    box-sizing: border-box;
    max-width: calc(100% - 2rem);
    margin: 130px auto 0;
    padding: 15rem 17rem;
  }

  &__ttl {
    font-size: 2.1rem;

    @include media-pc {
      font-size: 3.7rem;
    }
  }

  &__list {
    margin-top: 15px;

    @include media-pc {
      margin-top: 35px;
    }
  }

  &__item {
    padding: 1.6rem 0;

    @include media-pc {
      padding: 30px 0;
    }

    a {
      position: relative;
      width: 100%;
      height: 100%;

      @include media-pc {
        display: flex;
      }
    }

    & + & {
      border-top: 1px solid #e3e3e3;
    }
  }

  &__img {
    width: 11.6rem;
    min-width: 9rem;
    height: 6.5rem;
    margin-right: 18px;
    overflow: hidden;

    @include media-sp {
      float: left;
    }

    @include media-pc {
      width: 16rem;
      height: 9rem;
      margin-right: 30px;
    }

    img {
      width: 100%;
    }
  }

  &__txt {
    flex: 1;
  }

  &__lead {
    margin: 10px 0 10px;
    font-size: 1.2rem;
    line-height: 1.5em;

    @include media-pc {
      margin: 0 0 10px;
      font-size: 1.3rem;
    }
  }

  &__date,
  &__url {
    margin: 0;
    color: $gray-b7;
    font-size: 1.2rem;
    word-break: break-all;

    @include media-pc {
      font-size: 1.2rem;
    }
  }

  &__post-ttl {
    margin: 5px 0;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: #{(22/13)}em;

    @include media-sp {
      min-height: 5rem;
      margin: 5px 0 0 10.8rem;
    }

    @include media-pc {
      font-size: 1.8rem;
      line-height: #{(31/18)}em;
    }
  }

  &__more {
    width: 33.5rem;
    height: 6rem;
    margin: 3.6rem auto 0;
    background-color: #f5f5f1;
    color: #000000;
    font-size: 1.9rem;

    @include media-pc {
      width: 36.5rem;
      font-size: 1.8rem;
    }
  }
}
</style>
