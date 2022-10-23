import { useEffect, useState } from 'react';

const useFetch = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://travel-guru-server-seven.vercel.app/places")
        .then((res) => res.json())
            .then((data) => setData(data))
    }, []);

    return data
};

export default useFetch;