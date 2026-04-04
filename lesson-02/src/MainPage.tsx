import { TrackList } from './ui/TrackList';
import {TrackDetails} from './ui/TrackDetails';
import { useTrackSelection } from './bll/useTrackSelection';

export const MainPage = () => {
    const {trackId, setTrackId} = useTrackSelection()

    const handleTrackSelect = (id: string | null) => {
        setTrackId(id)
    }
    
    return (
        <div>
            <div style={{display: "flex", gap: "30px"}}>
                <TrackList 
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackSelect}/>
                <TrackDetails trackId={trackId}/>
            </div>
        </div>
    );
};