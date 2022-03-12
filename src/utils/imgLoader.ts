export const importAll = (r: any) => {
  let images: any = {};
  r.keys().map((item: string) => { images[item.replace('./', '')] = r(item); });
  return images;
};

export const checkImg = (imgArray: Array<any>, key:any) => {
  return imgArray[key?.large.slice(key.large.lastIndexOf('/') + 1)];
};
