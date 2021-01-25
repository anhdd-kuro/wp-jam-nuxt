import { InjectionKey, Ref } from "@nuxtjs/composition-api";
import { Tag } from "@/types/tag";

export const TagsKey: InjectionKey<Ref<Tag[]>> = Symbol("タグリスト");
