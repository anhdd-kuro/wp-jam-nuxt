export const useCategoryClass = (category: string): string => {
  let categoryClass = "";
  switch (category) {
    case "仕事と人":
      categoryClass = "type-red";
      break;
    case "カルチャーと働き方":
      categoryClass = "type-orange";
      break;
    case "プロジェクト":
      categoryClass = "type-purple";
      break;
    case "特集":
      categoryClass = "type-green";
      break;

    default:
      categoryClass = "";
  }
  return categoryClass;
};
