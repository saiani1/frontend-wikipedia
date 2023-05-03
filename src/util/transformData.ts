import { IWiki } from "types/wiki";

export const transformData = (totalData: IWiki[], filterData: IWiki) => {
  let data: string = "";

  const tmpArr = totalData.filter(
    (wiki) =>
      filterData.contents.includes(wiki.title) &&
      wiki.title !== filterData.title
  );

  tmpArr.sort((a, b) => {
    if (a.title.length > b.title.length) return -1;
    if (a.title.length < b.title.length) return 1;
    return 0;
  });

  if (tmpArr.length !== 0) {
    let includeTitleArr: string[][] = [];
    let transformStr: string = filterData.contents;

    tmpArr.forEach((wiki) => {
      const reverseTitle = `@${wiki.title.split("").reverse().join("")}`;

      transformStr = transformStr.replaceAll(
        wiki.title,
        `<button type='button' name=${wiki.id}>${reverseTitle}</button>`
      );
      includeTitleArr.push([reverseTitle, wiki.title]);
    });

    for (let i = 0; i < tmpArr.length; i++) {
      transformStr = transformStr.replaceAll(
        includeTitleArr[i][0],
        includeTitleArr[i][1]
      );
    }
    data = transformStr;
  } else data = filterData.contents;

  return data;
};
