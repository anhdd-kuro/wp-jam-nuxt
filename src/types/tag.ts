interface Tag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: string[];
}

type TagsApi = () => Promise<{
  error: string;
  tags: Tag[];
}>;

export { Tag, TagsApi };
