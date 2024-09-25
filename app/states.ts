import { atom } from "recoil";



export const chartsState = atom({
    key: 'chartsState',
    default: 0
})


export const playerState = atom({
    key: 'playerState',
    default: []
})
export const musicState = atom({
    key: 'musicState',
    default: null
})

export const currentTrackIdState = atom({
    key: 'currentTrackIdState',
    default: 0
})







