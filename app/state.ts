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
export const albumCoverState = atom({
    key: 'albumCoverState',
    default: []
})

export const mudicIDState = atom({
    key: 'mudicIDState',
    default: 155
})
export const playerDisplayState = atom({
    key: 'playerDisplayState',
    default: 157
})
export const albumMusicFromArtistState = atom({
    key: 'albumMusicFromArtistState',
    default: []
})

export const topHitState = atom({
    key: 'topHitState',
    default: null
})
 
export const chartsState = atom({
    key: 'chartsState',
    default: 0
})


export const playerState = atom({
    key: 'playerState',
    default: []
})


export const currentTrackIdState = atom({
    key: 'currentTrackIdState',
    default: 0
})









