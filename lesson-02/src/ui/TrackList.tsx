import { Track} from './Track';
import { useTracks } from '../bll/useTracks';
import styles from "./TrackList.module.css"

type Props = {
    onTrackSelect: (id: string | null) => void
    selectedTrackId: string | null
}


export const TrackList = ({onTrackSelect, selectedTrackId}: Props) => {
    const {tracks} = useTracks()

    const handleTrackReset = () => {
        onTrackSelect(null)
    }
    const handleTrackSelect = (traclId: string) => {
        onTrackSelect(traclId)
    }

    if(tracks == null){
        return <div>Loading...</div>
    }

    if(tracks.length == 0){
        return <div>No tracks</div>
    }
    
    return (
        <div className={styles.tracks}>
            <button onClick={handleTrackReset}>
                Reset selection
            </button>
            <ul>
            {tracks?.map((track) => (
                <Track
                    key={track.id}
                    track={track}
                    isTrackSelected={selectedTrackId == track.id}
                    onTrackSelect={handleTrackSelect}
                />
            ))}
            </ul>
        </div>
    );
};
