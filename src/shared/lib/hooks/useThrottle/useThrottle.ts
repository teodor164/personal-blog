import { useCallback, useRef } from 'react';

export const useThrottle = (callback: (...arg: any[]) => void, delay: number) => {
    const throttleRef = useRef<boolean>(false);

    return useCallback((...arg) => {
        if (!throttleRef.current) {
            callback(...arg);
            throttleRef.current = true;

            setTimeout(() => {
                throttleRef.current = false;
            }, delay);
        }
    }, [callback, delay]);
};
