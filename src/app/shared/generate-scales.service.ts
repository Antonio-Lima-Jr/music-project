import { Injectable } from '@angular/core';
import { chromaticScale, scaleShapes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class GenerateScalesService {
  teste(){
    console.log('teste');
  }

  generateScaleSevenNotes(scaleShape: string, tonica: string): string[] {

    let indexNote = Object.values(chromaticScale).indexOf(tonica);
    let scale = [];
    let index = 0;
    for (let i = 0; i < 7; i++) {
      if (indexNote > 11) {
        indexNote -= 12;
      }
      scale.push(Object.values(chromaticScale)[indexNote]);
      indexNote += scaleShapes[scaleShape][index] === 'T' ? 2 : 1;
      index++;
    }
    console.log(scale);
    return scale;
  }

}
