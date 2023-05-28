import { useEffect } from "react";
import { useState } from "react";
import { getWishes } from "../services/ApiService";

function useWishes() {

    const [wishes, setWishes] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(0)

    const handleFetch = async (refetch = false) => {
        try {
            if (refetch) {
                setPage(1)
                setWishes([])
                setTotal(0)
            }
            const res = await getWishes(refetch ? 1 : page)
            setWishes(res.data)
            setTotal(res.total)
        } catch (e) {
            console.error(e)
        }
    }

    const nextFetch = async () => {
        try {
            const res = await getWishes(page + 1)
            setWishes([...wishes, ...res.data])
            setPage(page + 1)
            return res
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        handleFetch()
        return () => {
            setPage(1)
            setWishes([])
        }
    }, [])

    return { total, wishes, loading, fetchWishes: handleFetch, nextFetch }
}

export default useWishes