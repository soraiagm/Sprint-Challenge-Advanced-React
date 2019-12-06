import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [values, setValues] = useLocalStorage();

    useEffect(() => {
        if(values) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }
    }, [values])

    return [values, setValues]
}