export type DictString = {
  [key: string]: string;
};

export type Board = {
  [key: number]: string[];
};

export const chromaticScale: DictString = {
  0: 'C',
  1: 'C#',
  2: 'D',
  3: 'D#',
  4: 'E',
  5: 'F',
  6: 'F#',
  7: 'G',
  8: 'G#',
  9: 'A',
  10: 'A#',
  11: 'B',
};

export const nuttDefaultNotes: DictString = {
  0: 'E',
  1: 'B',
  2: 'G',
  3: 'D',
  4: 'A',
  5: 'E',
};

