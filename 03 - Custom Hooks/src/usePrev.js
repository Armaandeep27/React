import { useEffect } from "react";

export function usePrev(value){
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.value;
}

// react returns first then calculates useEffect
// so we can pass the state we are updating and this will just return the previous value