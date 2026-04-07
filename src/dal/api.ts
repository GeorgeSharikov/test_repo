import { tracksDetailsStaticData } from '../data/tracksDetails.ts';
import {tracksListStaticData} from '../data/tracks.ts'

type TraclListItemAttachments = {
    url: string
}

export type trackListItemOutput = {
    id: string
    attributes: {
        title: string
        attachments: TraclListItemAttachments[]
    }
}

export const gerTracks = () => {
    return Promise.resolve({"data": tracksListStaticData})
    // const promise: Promise<{data: Array<trackListItemOutput>}> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", 
    //     {headers: {'api-key': 'fdb26fc4-e38c-451d-a9de-5de2073ab8d3'}})
    //     .then(data => data.json())
    // return promise
}

type TrackDetailsItemAttributes = {
    lyrics: string
    title: string
}

export type TrackDetailsItem = {
    id: string
    attributes: TrackDetailsItemAttributes
}

export const getTrack = (trackId: string): Promise<{data: TrackDetailsItem}> => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Promise.resolve({"data": (tracksDetailsStaticData as any)[trackId]["data"]})
    // return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {headers: {'api-key': 'fdb26fc4-e38c-451d-a9de-5de2073ab8d3'}})
    //     .then(data => data.json())
}

// const trackListId: Array<string> = trackList.map(el => el.id)
// const getTrackDetails = (trackId: string): Promise<{data: TrackDetailsItem}> => {
//     return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`})
//       .then(data => data.json())
// }
// const tracksDetailsData: { [key: string]: {[key: string]: TrackDetailsItem}} = {};
// const promises = trackListId.map(id => 
//     getTrackDetails(id).then(json => {
//         tracksDetailsData[id] = { "data": json.data };
//     })
// );
// Promise.all(promises).then(() => {
//     console.log('Все данные загружены:', JSON.stringify(tracksDetailsData));
// });