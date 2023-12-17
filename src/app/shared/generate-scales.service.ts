import { Injectable } from '@angular/core';
import {
  chromaticScale,
  scaleShapes,
  scaleShapesIntervals,
  DictString,
} from './notes';

@Injectable({
  providedIn: 'root',
})
export class GenerateScalesService {

  generateScaleSevenNotes(scaleShape: string, tonica: string): string[] {
    let indexNote = Object.values(chromaticScale).indexOf(tonica);
    let scale = [];
    for (let i = 0; i < 7; i++) {
      if (indexNote > 11) {
        indexNote -= 12;
      }
      scale.push(Object.values(chromaticScale)[indexNote]);
      indexNote += scaleShapes[scaleShape][i] === 'T' ? 2 : 1;
    }
    return scale;
  }

  generateIntervalsByTonic(listNote: string[]): DictString {
    let sumIntervals = 0;
    let scale: any = {};
    for (let i = 0; i < listNote.length; i++) {
      if (i === 0) {
        scale[listNote[i]] = 'T';
        continue;
      }
      let indexNote = Object.values(chromaticScale).indexOf(listNote[i]);
      let indexNotePrev = Object.values(chromaticScale).indexOf(
        listNote[i - 1]
      );
      let interval = indexNote - indexNotePrev;
      if (indexNote < indexNotePrev) {
        interval = 12 - indexNotePrev + indexNote;
      }
      sumIntervals += interval;
      if (sumIntervals > 11) {
        sumIntervals -= 12;
      }
      scale[listNote[i]] = scaleShapesIntervals[sumIntervals];
    }
    return scale;
  }
}
