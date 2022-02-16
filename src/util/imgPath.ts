function createImgPath(id: string | undefined, format?: string) {
  return `${process.env.REACT_APP_IMG_PATH}/${
    format ? format : 'original'
  }${id}`;
}

function createTvImgPath(id: string | undefined) {
  return `${process.env.REACT_APP_IMG_PATH}/tv/${id}/images?api_key=${process.env.REACT_APP_IMG_PATH}&language=en-US`;
}

export { createImgPath, createTvImgPath };
