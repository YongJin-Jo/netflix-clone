import { atom } from 'recoil';

interface animationStateDefine {
  isDragging: boolean;
}

const movieState = atom({
  key: 'fetchMovie',
  default: [],
});

const animationStroe = atom<animationStateDefine[]>({
  key: 'drag',
  default: [{ isDragging: false }],
});

export { animationStroe, movieState };
