import { useContext } from "@nuxtjs/composition-api";

export default (options: { title: string; desc: string; ogpImg: string }) => {
  const { ssrContext, route } = useContext();
  const host =
    process.server && process.static
      ? process.env.STATIC_SERVER
      : process.server
      ? ssrContext!.req.headers.host
      : window.location.host;

  return {
    title: options.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: options.desc,
      },
      {
        name: "og:title",
        content: options.title,
      },
      {
        name: "og:description",
        content: options.desc,
      },
      {
        name: "og:site",
        content: `${host}/${route.value.path}`,
      },
      {
        name: "og:image",
        content: `${host}/${options.ogpImg}`,
      },
    ],
  };
};
