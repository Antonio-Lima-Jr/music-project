import {Channel} from "./Channel";
export interface MusicItem {
    version: {
        full: string;
        major: string;
        minor: string;
    };
    name: string;
    subtitle: string;
    artist: string;
    album: string;
    lyricsAuthor: string;
    musicAuthor: string;
    copyright: string;
    tab: string;
    instructions: string;
    comments: string;
    lyric: string;
    tempoValue: number;
    keySignature: number;
    keySignatures: number[];
    channels: number;
    measures: number;
    trackCount: number;
    measureHeaders: string[];
    tracks: any[];
    tripletFeel: boolean;
    channel: Channel[];
}
