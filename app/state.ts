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
    default: 206
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
 
export const  oneArrayMusicState = atom({
    key: 'oneArrayMusicState',
    default: []
})
export const somePlayingState = atom({
    key: 'somePlayingState',
    default : null
})

export const globalMusicState = atom({
    key: 'globalMusicState',
    default: null
})

export const globalPLaylistState = atom({
    key: 'globalPLaylistState',
    default: null
})
export const userIDState = atom({
    key: 'userIDState', 
    default: ''
})
export const formusicFetchState = atom({
    key: 'formusicFetchState',
    default: null
})

 
