import { atom } from 'recoil';

export const artistIdState = atom<number>({
    key: 'artistIdState',
});


export const albumidState = atom({
    key: 'albumidState',
    default: null
})

export const newsImageState = atom({
    key: 'newsImageState',
    default: null
})

export const musicState = atom({
    key: 'musicState',
    default: []
})
export const globalAlbumDataState = atom({
    key: 'globalAlbumDataState',
    default: []
})


