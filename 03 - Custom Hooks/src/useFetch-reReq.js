import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    async function fetchFunc() {
        setIsFetching(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsFetching(false);
    }

    useEffect(() => {
        fetchFunc();
    }, [url])

    useEffect(() => {
        const interval = setInterval(() => {
            fetchFunc();
        }, 10 * 1000);

        return () => {
            clearInterval(interval)
        }
    }, [url])

    return {
        data,
        isFetching
    };
} 