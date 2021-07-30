import {TrackResponse} from "./track.response";

export interface PlaylistTracksResponse {
    id: number
    title: string
    description: string
    duration: number
    public: boolean
    is_loved_track?: boolean
    collaborative: boolean
    rating: number
    nb_tracks: number
    unseen_track_count?: number
    fans: number
    link: string
    share: string
    picture: string
    picture_small: string
    picture_medium: string
    picture_big: string
    picture_xl: string
    checksum: string
    creator: PlaylistCreator
    tracks: Array<TrackResponse>
}

export interface PlaylistCreator {
    id: number
    name: string
    lastname: string
    firstname: string
    email: string
    status: number
    birthday: Date
    inscription_date: Date
    gender: string
    link: string
    picture: string
    picture_small: string
    picture_medium: string
    picture_big: string
    picture_xl: string
    country: string
    lang: string
    is_kid: boolean
    explicit_content_level: string
    explicit_content_levels_available: Array<any>
    tracklist: string
}