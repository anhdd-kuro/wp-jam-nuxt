<template>
  <main class="container">
    <TopPost v-if="topPost" :post="topPost" />
    <Posts :posts="mainPosts" :tags="tags" />
    <MediaPosts :posts="mediaPosts" />
  </main>
</template>

<script lang="ts">
import {
  defineComponent,
  useMeta,
  inject,
  useFetch,
} from "@nuxtjs/composition-api";
import { useTopPost } from "./_compositions/useTopPost";
import Posts from "@/partials/Home/Posts/index.vue";
import MediaPosts from "@/partials/Home/MediaPosts/index.vue";
import TopPost from "@/partials/Home/TopPost/index.vue";
import setMeta from "@/meta";
import { TagsKey } from "@/helper/provider";
import { usePosts } from "@/compositions/posts";
import { useMediaPosts } from "@/compositions/mediaPosts";

export default defineComponent({
  components: {
    TopPost,
    Posts,
    MediaPosts,
  },
  setup() {
    const title =
      "オイシックス・ラ・大地　採用情報　ーこれからの食卓、これからの畑";
    const desc =
      "オイシックス・ラ・大地株式会社は、食卓と畑をつなぐ次世代の事業の柱をつくる人材を募集します。";
    const ogpImg = "ogp_media.png";
    const metaInfo = setMeta({
      title,
      desc,
      ogpImg,
    });
    useMeta(metaInfo);

    const tags = inject(TagsKey);
    const { posts, fetchPosts } = usePosts(tags);
    const { mediaPosts, fetchMediaPosts } = useMediaPosts();
    const { topPost, mainPosts } = useTopPost(posts);

    const { fetch } = useFetch(async () => {
      await fetchMediaPosts(10);
      await fetchPosts(7);
    });

    fetch();

    return { topPost, mainPosts, tags, mediaPosts };
  },
  head: {},
});
</script>
