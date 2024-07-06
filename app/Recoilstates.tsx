import { atom } from "recoil";

export const  clipState = atom({
    key: 'clip',
    default: '' 
})

export const classesState = atom({
    key: 'classes',
    default: []
})