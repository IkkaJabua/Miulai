
import { useState, useEffect } from 'react';

function useViewport() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 767);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // ინიციალიზაცია

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return isVisible;
}



export default useViewport