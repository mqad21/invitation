import { useEffect } from "react";
import { useState } from "react";
import { getWishes } from "../services/ApiService";

function useWishes() {

    const [wishes, setWishes] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const handleFetch = async () => {
        try {
            const res = await getWishes(page)
            setWishes(res.data)
        } catch (e) {
            console.error(e)
        }
    }

    const nextFetch = async () => {
        try {
            const res = await getWishes(page + 1)
            setWishes([...wishes, ...res.data])
            setPage(page + 1)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        setPage(1)
        handleFetch()
    }, [])

    return { wishes, loading, fetchWishes: handleFetch, nextFetch }
}

export default useWishes