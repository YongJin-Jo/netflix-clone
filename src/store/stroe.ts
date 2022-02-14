import { atom } from 'recoil';

const dragingAtom = atom({
  key: 'drag',
  default: false,
});

export { dragingAtom };
