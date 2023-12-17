export type DictString = {
  [key: string]: string;
};

export type Board = {
  [key: number]: string[];
};

export type DictScale = {
  [key: string]: string[];
};

export enum Notes {
  C = "C",
  Csus = "C#/Db",
  D = "D",
  Dsus = "D#/Eb",
  E = "E",
  F = "F",
  Fsus = "F#/Gb",
  G = "G",
  Gsus = "G#/Ab",
  A = "A",
  Asus = "A#/Bb",
  B = "B",
}

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

export const scaleShapes: DictScale = {
  major: ['T', 'T', 'S', 'T', 'T', 'T', 'S'],
  menorNatural: ['T', 'S', 'T', 'T', 'S', 'T', 'T'],
  menorHarmonic: ['T', 'S', 'T', 'T', 'S', 'T', 'S'],
  menorMelodic: ['T', 'S', 'T', 'T', 'T', 'T', 'S'],
};

export const scaleShapesIntervals: any = {
  0: 'T',
  1: '2m/9m',
  2: '2M/9M',
  3: '3m/9A',
  4: '3M',
  5: '4J/11J',
  6: '4A/5d/11A',
  7: '5J',
  8: '5A/6m/13m',
  9: '6M/7d/13M',
  10: '7m/13A',
  11: '7M',
  12: '8J',
};

export const colorByNoteAndInterval: {
  [key: string]: { [key: string]: string };
} = {
  C: {
    T: '#0d47a1',
    '2m/9m': '#90caf9',
    '2M/9M': '#90caf9',
    '3m/9A': '#2196f3',
    '3M': '#2196f3',
    '4J/11J': '#90caf9',
    '4A/5d/11A': '#90caf9',
    '5J': '#2196f3',
    '5A/6m/13m': '#90caf9',
    '6M/7d/13M': '#90caf9',
    '7m/13A': '#2196f3',
    '7M': '#2196f3',
  },
  D: {
    T: '#1b5e20',
    '2m/9m': '#a5d6a7',
    '2M/9M': '#a5d6a7',
    '3m/9A': '#4caf50',
    '3M': '#4caf50',
    '4J/11J': '#a5d6a7',
    '4A/5d/11A': '#a5d6a7',
    '5J': '#4caf50',
    '5A/6m/13m': '#a5d6a7',
    '6M/7d/13M': '#a5d6a7',
    '7m/13A': '#4caf50',
    '7M': '#4caf50',
  },
  E: {
    T: '#004d40',
    '2m/9m': '#80cbc4',
    '2M/9M': '#80cbc4',
    '3m/9A': '#009688',
    '3M': '#009688',
    '4J/11J': '#80cbc4',
    '4A/5d/11A': '#80cbc4',
    '5J': '#009688',
    '5A/6m/13m': '#80cbc4',
    '6M/7d/13M': '#80cbc4',
    '7m/13A': '#009688',
    '7M': '#009688',
  },
  F: {
    T: '#1a237e',
    '2m/9m': '#9fa8da',
    '2M/9M': '#9fa8da',
    '3m/9A': '#3f51b5',
    '3M': '#3f51b5',
    '4J/11J': '#9fa8da',
    '4A/5d/11A': '#9fa8da',
    '5J': '#3f51b5',
    '5A/6m/13m': '#9fa8da',
    '6M/7d/13M': '#9fa8da',
    '7m/13A': '#3f51b5',
    '7M': '#3f51b5',
  },
  G: {
    T: '#b71c1c',
    '2m/9m': '#ef9a9a',
    '2M/9M': '#ef9a9a',
    '3m/9A': '#c62828',
    '3M': '#f44336',
    '4J/11J': '#f44336',
    '4A/5d/11A': '#ef9a9a',
    '5J': '#f44336',
    '5A/6m/13m': '#ef9a9a',
    '6M/7d/13M': '#ef9a9a',
    '7m/13A': '#f44336',
    '7M': '#f44336',
  },
  A: {
    T: '#311b92',
    '2m/9m': '#b39ddb',
    '2M/9M': '#b39ddb',
    '3m/9A': '#673ab7',
    '3M': '#673ab7',
    '4J/11J': '#b39ddb',
    '4A/5d/11A': '#b39ddb',
    '5J': '#673ab7',
    '5A/6m/13m': '#b39ddb',
    '6M/7d/13M': '#b39ddb',
    '7m/13A': '#673ab7',
    '7M': '#673ab7',
  },
  B: {
    T: '#bf360c',
    '2m/9m': '#ffab91',
    '2M/9M': '#ffab91',
    '3m/9A': '#ff5722',
    '3M': '#ff5722',
    '4J/11J': '#ffab91',
    '4A/5d/11A': '#ffab91',
    '5J': '#ff5722',
    '5A/6m/13m': '#ffab91',
    '6M/7d/13M': '#ffab91',
    '7m/13A': '#ff5722',
    '7M': '#ff5722',
  },
};
