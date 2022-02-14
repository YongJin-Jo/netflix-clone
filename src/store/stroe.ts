import { atom } from 'recoil';

interface animationStateDefine {
  isDragging: boolean;
}

const animationStroe = atom<animationStateDefine[]>({
  key: 'drag',
  default: [{ isDragging: false }],
});

export { animationStroe };
