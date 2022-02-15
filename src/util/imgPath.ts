function createImgPath(id: string | undefined, format?: string) {
  return `${process.env.REACT_APP_IMG_PATH}/${
    format ? format : 'original'
  }${id}`;
}
export { createImgPath };
