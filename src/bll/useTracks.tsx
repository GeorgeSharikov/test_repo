import { useEffect, useState } from "react"
import { gerTracks, type trackListItemOutput } from "../dal/api"

export const useTracks = () => {
    const [tracks, setTracks] = useState<Array<trackListItemOutput> | null>(null)

    useEffect(() => {
        gerTracks().then(json => setTracks(json.data))
    }, [])

    return {tracks}
}