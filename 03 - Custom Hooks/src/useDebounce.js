import { useRef } from "react";

function expensiveOperation(){
    console.log('expensive operation happens here');
}
export function useDebounce(){
    const currentClock = useRef();

    const fn = () => {
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(() => {
            expensiveOperation();
        }, 100);
    }

    return fn;
}

// so if someone tries to bombard the expensiveOperation it will only go if they
// stop bombarding and the expensive thing will be done when they eventually stop
// used in amazon search for example if we search backend request goes but if we 
// type very fast then req stops kinda so this kind of sets a limit of 100ms for that 
// specific function


// can also do it with useEffect and return the clearTimeout ( cleanup func )