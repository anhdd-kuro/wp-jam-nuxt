<template>
  <NuxtLink
    :to="`/articles/?tag=${tag.name}`"
    class="tag"
    :class="{ isActive: 'is-active' }"
  >
    {{ tag.name }}
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api";
import { Tag } from "@/types/tag";

export default defineComponent({
  props: {
    tag: {
      type: Object as PropType<Tag>,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.tag {
  display: inline-block;
  margin: 0 7px 8px 0;
  padding: 1.2rem 2rem;
  border-radius: 20px;
  background-color: white;
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1;

  @include media-pc {
    margin: 0 10px 12px 0;
    padding: 10px 22px;
    font-size: 1.4rem;
  }

  &.is-active {
    background-color: $black-22;
    color: white;
  }
}
</style>
