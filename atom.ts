import { atom } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: '',
});

export const emailState = atom({
  key: 'emailState',
  default: '',
});

export const consentCheckState = atom({
  key: 'consentCheckState',
  default: true,
});

export const fortuneModalIdState = atom({
  key: 'fortuneModalIdState',
  default: '',
});

export const goalListState = atom({
  key: 'goalListState',
  default: [{ id: 1, content: '', focus: false }],
});
