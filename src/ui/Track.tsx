import type { trackListItemOutput } from "../dal/api"
import styles from "./Track.module.css"
import clsx from "clsx"

type Props = {
    track: trackListItemOutput
    isTrackSelected: boolean
    onTrackSelect: (trackId: string) => void
}

export function Track({track, isTrackSelected, onTrackSelect}: Props) {

    const handleSelect = () => {
        onTrackSelect(track.id)
    }
    
    const trackClassName = clsx({
        [styles.track]: true,
        [styles.selected]: isTrackSelected
    })
    return (
        <li key={track.id} className={trackClassName}>
            <div  onClick={handleSelect}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls></audio>
        </li>
    );
}
