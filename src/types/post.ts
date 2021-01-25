import { Tag } from "./tag";

export interface PostImage {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface PostMediaImage {
  "wp:featuredmedia": [
    {
      media_details: {
        sizes: {
          thumbnail: PostImage;
          medium: PostImage;
          large: PostImage;
          medium_large: PostImage;
          full: PostImage;
        };
      };
    }
  ];
}

interface PostMediaDefault extends PostMediaImage {
  "wp:term": {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: string;
  }[][];
}

interface PostResource<MediaType = PostMediaDefault> {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: string[];
  categories: number[];
  tags: number[];
  hall_of_fame: [];
  _embedded: MediaType;
}

interface Post {
  id: number;
  date: string;
  category: string;
  image: {
    thumbnail: PostImage;
    medium: PostImage;
    large: PostImage;
    medium_large: PostImage;
    full: PostImage;
  };
  title: string;
  content: string;
  tags: Tag[];
}

type PostsApi = (
  limit: number
) => Promise<{
  error: string;
  posts: PostResource[];
}>;

export { Post, PostsApi, PostResource };
