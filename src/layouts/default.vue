<template>
  <div>
    <Header />
    <Nuxt />
    <Footer :tags="tags" />
  </div>
</template>

<script>
import { defineComponent, provide } from "@nuxtjs/composition-api";
import Header from "./modules/header.vue";
import Footer from "./modules/footer/index.vue";
import { useTags } from "@/compositions/tags";
import { TagsKey } from "@/helper/provider";

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    const { tags, fetchTags } = useTags();
    fetchTags();
    provide(TagsKey, tags);

    return { tags };
  },
});
</script>
