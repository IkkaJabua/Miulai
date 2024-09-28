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
export const artistNameState = atom({
    key: 'artistNameState',
    default: ''
})

export const clickFetchState = atom({
    key: 'clickFetchState',
    default: false
})
export const albumIdState = atom({
    key: 'albumIdState',
    default: 64

})
 

