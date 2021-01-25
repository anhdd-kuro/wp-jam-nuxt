import { Post, PostResource, PostMediaImage } from "./post";

interface MediaPostResource extends Partial<PostResource<PostMediaImage>> {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  _embedded: PostMediaImage;
  meta_custom: {
    media_text: string;
    media_link: string;
  };
}

interface MediaPost extends Partial<Post> {
  meta_custom: {
    media_text: string;
    media_link: string;
  };
}

type MediaPostsApi = (
  limit: number
) => Promise<{
  error: string;
  mediaPosts: MediaPostResource[];
}>;

export { MediaPost, MediaPostsApi, MediaPostResource };
