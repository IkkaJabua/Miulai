interface propsinterFace {
    isPlaying: boolean;
    onPlayPause: () => void;
    onPrevious: () => void;
    onNext: () => void;
    onVolumeChange: (volume: number) => void;
    volume: number;
    isLooping: boolean;
    onToggleLoop: () => void;
    isShuffling: boolean;
    onToggleShuffle: () => void;
    currentTime: number;
    duration: number;
    onTimeChange: (newTime: number) => void;
    backgroundImage: string
}
export default propsinterFace
