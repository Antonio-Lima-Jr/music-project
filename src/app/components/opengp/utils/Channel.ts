export class Channel {

  public static readonly DEFAULT_PERCUSSION_CHANNEL = 9;
  public static readonly DEFAULT_PERCUSSION_PROGRAM = 0;
  public static readonly DEFAULT_PERCUSSION_BANK = 128;
  public static readonly DEFAULT_BANK = 0;
  public static readonly DEFAULT_PROGRAM = 25;
  public static readonly DEFAULT_VOLUME = 127;
  public static readonly DEFAULT_BALANCE = 64;
  public static readonly DEFAULT_CHORUS = 0;
  public static readonly DEFAULT_REVERB = 0;
  public static readonly DEFAULT_PHASER = 0;
  public static readonly DEFAULT_TREMOLO = 0;
  public static readonly MIN_VOLUME = 0;
  public static readonly MAX_VOLUME = 127;

  private _channelId: number;

  private _bank: number;
  private _program: number;
  private _volume: number;
  private _balance: number;
  private _chorus: number;
  private _reverb: number;
  private _phaser: number;
  private _tremolo: number;
  private _parameters: number[];

  constructor() {
    this._channelId = 0;
    this._bank = Channel.DEFAULT_BANK;
    this._program = Channel.DEFAULT_PROGRAM;
    this._volume = Channel.DEFAULT_VOLUME;
    this._balance = Channel.DEFAULT_BALANCE;
    this._chorus = Channel.DEFAULT_CHORUS;
    this._reverb = Channel.DEFAULT_REVERB;
    this._phaser = Channel.DEFAULT_PHASER;
    this._tremolo = Channel.DEFAULT_TREMOLO;
    this._parameters = [];
  }

  get channelId(): number {
    return this._channelId;
  }

  set channelId(value: number) {
    this._channelId = value;
  }

  get bank(): number {
    return this._bank;
  }

  set bank(value: number) {
    this._bank = value;
  }

  get program(): number {
    return this._program;
  }

  set program(value: number) {
    this._program = value;
  }

  get volume(): number {
    return this._volume;
  }

  set volume(value: number) {
    this._volume = value;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this._balance = value;
  }

  get chorus(): number {
    return this._chorus;
  }

  set chorus(value: number) {
    this._chorus = value;
  }

  get reverb(): number {
    return this._reverb;
  }

  set reverb(value: number) {
    this._reverb = value;
  }

  get phaser(): number {
    return this._phaser;
  }

  set phaser(value: number) {
    this._phaser = value;
  }

  get tremolo(): number {
    return this._tremolo;
  }

  set tremolo(value: number) {
    this._tremolo = value;
  }

  get parameters(): number[] {
    return this._parameters;
  }

  set parameters(value: number[]) {
    this._parameters = value;
  }
}
