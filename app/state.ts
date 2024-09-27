import { atom } from 'recoil';

export const artistIdState = atom<number>({
    key: 'artistIdState',
});


export const albumidState = atom({
    key: 'albumidState',
    default: null
})