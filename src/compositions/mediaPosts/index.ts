import { fetch } from "@/api/mediaPosts";
import { MediaPost, MediaPostResource } from "@/types/mediaPosts";
import { ref, computed } from "@vue/composition-api";

const useMediaPosts = () => {
  const mediaPostsResource = ref<MediaPostResource[]>([]);

  const mediaPosts = computed<MediaPost[]>(() =>
    mediaPostsResource.value.map((mediaPost) => {
      return {
        id: mediaPost.id,
        date: mediaPost.date,
        image: mediaPost._embedded["wp:featuredmedia"][0].media_details.sizes,
        title: mediaPost.title.rendered,
        meta_custom: {
          media_link: mediaPost.meta_custom.media_link,
          media_text: mediaPost.meta_custom.media_text,
        },
      };
    })
  );

  const fetchMediaPosts = async (
    limit: number
  ): Promise<MediaPostResource[]> => {
    const res = await fetch(limit);
    mediaPostsResource.value = res.mediaPosts;
    return res.mediaPosts;
  };

  return { mediaPosts, fetchMediaPosts };
};

export { useMediaPosts };
