import {Injectable} from '@angular/core';
import {MusicItem} from './utils/gp';
import {Channel} from "./utils/Channel";

interface TimeSignature {
  numerator: number;
  denominator: number;
}


@Injectable({
  providedIn: 'root'
})
export class ParserGpService {

  private readonly TAG = "ParserGpService";

  private content: ArrayBuffer | undefined;
  private _musicItem: MusicItem = {} as MusicItem;

  private get musicItem(): MusicItem {
    return this._musicItem;
  }

  private set musicItem(value: Partial<MusicItem>) {
    this._musicItem = {
      ...this._musicItem,
      ...value
    } as MusicItem;
  }

  parseGpFile(file: File): Promise<MusicItem> {
    return new Promise((resolve, reject) => {
      var r = new FileReader();
      r.onload = (e: ProgressEvent<FileReader>) => {
        let result = (e.target as FileReader).result;
        if (result == null) {
          console.error(this.TAG, "Error parsing file");
          return;
        }
        if (result instanceof ArrayBuffer) {
          this.content = result;
          this.parser();
          if (this.musicItem != undefined) {
            resolve(this.musicItem);
          } else {
            reject("Error parsing file");
          }
        }
      }
      r.readAsArrayBuffer(file);
    });
  }

  parser() {
    try {
      this.readVersion();
      this.readInfo();

      this.musicItem.tripletFeel = this.readBoolean();
      this.musicItem.tempoValue = this.readInt();
      this.musicItem.keySignature = this.getKeySignature();

      this.skip(3);

      this.musicItem.channel = this.readChannels();

      this.musicItem.measures = this.readInt();
      this.musicItem.trackCount = this.readInt();
      this.musicItem.keySignatures = [this.musicItem.keySignature]
      if (this.musicItem.measures > 0) {
        this.musicItem.keySignatures[0] = this.musicItem.keySignature;
      }

      this.readMeasureHeaders();


      this.log(this.TAG, "Version: " + this.musicItem.version?.full);
    } catch (error) {
      this.log(this.TAG, "Error parsing file: " + error);
    }
  }

  private getKeySignature() {
    let keySignature = this.readByte();
    if (keySignature < 0) {
      keySignature = 7 - keySignature;
    }


    return keySignature;
  }

  private readVersion(): void {
    let len = this.readInt(1);
    let bytes = this.content!.slice(0, 30);
    this.content = this.content!.slice(30);
    const version = new TextDecoder().decode(bytes.slice(0, len));
    const match = /v(\d+)\.(\d+)/.exec(version);
    if (match == null) {
      throw new Error("Error parsing version");
    }
    const [, major, minor] = match;
    this.musicItem = {
      version: {
        full: version,
        major: major,
        minor: minor
      },
    };
  }

  private readInfo() {
    this.musicItem.name = this.nextString();
    this.musicItem.subtitle = this.nextString();
    this.musicItem.artist = this.nextString();
    this.musicItem.album = this.nextString();
    this.musicItem.lyricsAuthor = this.nextString();
    this.musicItem.copyright = this.nextString();
    this.musicItem.lyric = this.nextString();
    this.nextString();
    let comments = this.readInt();
    this.musicItem.comments = "";
    for (let i = 0; i < comments; i++) {
      this.musicItem.comments += this.nextString();
    }

  }

  nextString(): string {
    let length = this.readInt();
    length = this.readInt(1);
    let string = this.readString(length);
    this.content = this.content!.slice(length);
    return string;
  }

  private readString(length: number): string {
    return new TextDecoder().decode(this.content!.slice(0, length));
  }

  private readInt(length: number = 4): number {
    const bytes = this.content!.slice(0, length);
    this.content = this.content!.slice(length);
    return new DataView(bytes).getUint8(0);
  }

  private log(tag: string, message: string): void {
    console.log(tag, message);
  }

  private readBoolean(): boolean {
    return this.readByte() == 1;
  }

  private readByte(): number {
    const bytes = this.content!.slice(0, 1);
    this.content = this.content!.slice(1);
    return new DataView(bytes).getUint8(0);
  }

  private skip(length: number): void {
    this.content = this.content!.slice(length);
  }

  private readChannels() {
    let channels: Channel[] = [];
    for (let i = 0; i < 64; i++) {
      let channel = new Channel();
      channel.channelId = i;
      channel.program = this.readInt();
      channel.volume = this.readByte();
      channel.balance = this.readByte();
      channel.chorus = this.readByte();
      channel.reverb = this.readByte();
      channel.phaser = this.readByte();
      channel.tremolo = this.readByte();
      channel.bank = (i == 9 ? Channel.DEFAULT_PERCUSSION_BANK : Channel.DEFAULT_BANK);
      if (channel.program < 0) {
        channel.program = 0;
      }
      channels.push(channel);
      this.skip(2);
    }
    return channels;
  }

  private readMeasureHeaders() {
    let timeSignature: TimeSignature;
    this.musicItem.measureHeaders = [];
    for (let i = 0; i < this.musicItem.measures; i++) {
      this.musicItem.measureHeaders.push(this.nextString());
    }
  }
}

