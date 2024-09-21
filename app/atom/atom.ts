import { atom } from 'recoil';

export interface File {
    id: number;
    url: string;
    key: string;
    bucket: string;
    fileName: string;
}

export interface Track {
    id: number;
    name: string;
    artistName: string;
    playCount: number;
    views: number;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    files: File[]; 
}


export const currentTrackState = atom<Track | null>({
    key: 'currentTrackState',
    default: null,
});

export const isPlayingState = atom<boolean>({
    key: 'isPlayingState',
    default: false,
});
