import { useTrackDetails } from '../bll/useTrackDetails';
import styles from "./TrackDetails.module.css"

type Props = {
    trackId: string | null
}

export const TrackDetails = ({trackId} : Props) => {
    const {trackDetails} = useTrackDetails(trackId)
    return (
        <div className={styles.track}>
            <p>Track Details</p>
            <div>
                {!trackId && "Track is not selected"}
                {trackId && trackId !== trackDetails?.id && <div> 
                    Loading of track... 
                    <div>{trackDetails?.attributes.title}</div>
                    <div>{trackDetails?.attributes.lyrics || trackDetails === null || "No lyrics for selected track :("}</div>
                </div>}
                {trackId && trackId === trackDetails?.id && <div> 
                    <div>{trackDetails?.attributes.title}</div>
                    <div>{trackDetails?.attributes.lyrics || "No lyrics for selected track :("}</div>
                </div>}
            </div>
          </div>
    );
};