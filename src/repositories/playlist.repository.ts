import got from 'got'
import { PlaylistTracksResponse } from '../responses/playlist-tracks.response'

export function getPlaylistTracks(playlistId: number): Promise<PlaylistTracksResponse> {
    return got(`https://api.deezer.com/playlist/${playlistId}/tracks`).json()
}