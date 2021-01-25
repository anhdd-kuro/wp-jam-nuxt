<template>
  <section class="posts">
    <PageTitle title="記事一覧" />
    <div class="posts__tags">
      <h3 class="posts__tags-ttl u-fbold font-montserrat">Tags</h3>
      <TagComponent v-for="tag in tags" :key="tag.id" :tag="tag" />
    </div>
    <div class="posts__list">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <Button
      class="posts__more"
      :has-arrow="true"
      :is-rounded="true"
      :is-color-reverse="true"
      href="/posts"
    >
      MORE
    </Button>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { Post } from "@/types/post";
import { Tag } from "@/types/tag";
import Card from "@/components/Card/index.vue";
import PageTitle from "@/components/PageTitle/index.vue";
import TagComponent from "@/components/Tag/index.vue";
import Button from "@/components/Button/index.vue";

export default defineComponent({
  components: {
    Card,
    PageTitle,
    TagComponent,
    Button,
  },
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
    tags: {
      type: Array as PropType<Tag[]>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.posts {
  &__list {
    margin-top: 20px;

    @include media-pc {
      @include flex-list(3, 32%, 40px);

      max-width: 1200px;
      margin: 86px auto;
    }
  }

  &__tags {
    position: relative;
    margin: 30px 1rem 0;
    padding: 3rem 1.8rem 1.5rem;
    background-color: rgba($yellow-tag, 0.6);

    @include media-pc {
      width: 80rem;
      margin: 80px auto 0;
      padding: 30px;
    }

    &-ttl {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-50%);
      font-size: 26px;
    }
  }

  &__more {
    width: 33.5rem;
    height: 6rem;
    margin: 0 auto;
    font-size: 1.9rem;

    @include media-pc {
      width: 36.5rem;
      font-size: 1.8rem;
    }
  }
}
</style>
