import {useState, useEffect} from 'react';
import { getTrack, type TrackDetailsItem } from '../dal/api';


export const useTrackDetails = (trackId: string | null) => {
    const [trackDetails, setTrackDetails] = useState<TrackDetailsItem | null>(null)
    useEffect(() => {
        if(!trackId) return;

        getTrack(trackId)
            .then(json => setTrackDetails(json.data))
    }, [trackId])

    return {trackDetails}
}