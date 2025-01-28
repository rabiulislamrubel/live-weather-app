import { useEffect, useRef } from "react";

export const useDebounce = (callback, delay) => {
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.currect) {
                clearInterval(timeoutRef.currect);
            }
        }
    }, [])

    const debounceCallback = (...args) => {
        if (timeoutRef.currect) {
            clearTimeout(timeoutRef.currect)
        }

        setTimeout(() => {
            callback(...args)
        }, delay)
    }
    return debounceCallback;
}