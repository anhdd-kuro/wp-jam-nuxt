<template>
  <div class="card">
    <a href="" class="card__overlay" target="_blank">
      <div class="card__img">
        <img v-if="post.image.full" :src="post.image.full.source_url" alt="" />
      </div>
      <Category :category="post.category" class="card__category" />
      <div class="card__txt">
        <h4 class="card__ttl">
          {{ post.title }}
        </h4>
        <p class="card__date font-montserrat">
          {{ post.date }}
        </p>
        <div class="card__tag-list">
          <Tag
            v-for="tag in post.tags"
            :key="tag.id"
            :tag="tag"
            class="card__tag-item"
          />
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import { PropType } from "@vue/composition-api";
import { Post } from "@/types/post";
import Tag from "@/components/Tag/index.vue";
import Category from "@/components/Category/index.vue";

export default defineComponent({
  components: {
    Tag,
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
.card {
  background-color: white;

  &__overlay {
    position: relative;
  }

  &__img {
    position: relative;
    height: 18.6rem;
    overflow: hidden;

    @include media-pc {
      height: 20rem;
    }

    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: auto;
      min-height: 100%;
      max-height: 120%;
      transform: translate(-50%, -50%);
    }
  }

  &__txt {
    padding: 1.2rem 2rem 3rem;

    @include media-pc {
      padding: 20px 25px 30px;

      &.is_article_top {
        padding: 30px 0 40px;
      }
    }
  }

  &__ttl {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: #{(28.8/18)}em;
  }

  &__date {
    margin-top: 10px;
    color: $gray-b7;
    font-size: 1.2rem;
    letter-spacing: 0.1em;
  }

  &__category {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    margin: 0 0 0 12px;
    transform: translate(0, -50%);
  }

  &__tag {
    &-list {
      margin-top: 20px;
    }

    &-item {
      margin: 10px 8px 0 0;
      border: 1px solid $gray-b9;
      color: #6e6e6e;
    }
  }
}
</style>
