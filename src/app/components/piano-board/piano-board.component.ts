import { Component, Input, OnInit } from '@angular/core';
import { GenerateScalesService } from 'src/app/shared/generate-scales.service';
import { chromaticScale, Notes } from 'src/app/shared/notes';

@Component({
  selector: 'app-piano-board',
  templateUrl: './piano-board.component.html',
  styleUrls: ['./piano-board.component.scss'],
})
export class PianoBoardComponent implements OnInit {
  keys?: Keys[];
  @Input() scale: Notes[] = [];

  constructor(private generateScalesService: GenerateScalesService) {}

  ngOnInit(): void {
    this.generateNotesOfPiano();
  }
  generateNotesOfPiano() {
    let indexNote = 0;
    let indexOctave = 0;
    let octave = 0;
    let notesOfPiano: Keys[] = [];
    for (let i = 0; i < 88; i++) {
      if (indexNote > 11) {
        indexNote -= 12;
        indexOctave++;
      }
      if (indexOctave > 7) {
        indexOctave -= 8;
        octave++;
      }
      let note = Object.values(chromaticScale)[indexNote];
      let color = note.includes('#') ? 'black' : 'white';
      // let interval = this.generateIntervalToNote(note);
      notesOfPiano.push({
        color: color,
        note: note + octave,
        // interval: interval,
      });
      indexNote++;
    }

    console.log(notesOfPiano);

    this.keys = notesOfPiano;
  }
  // generateIntervalToNote(note: string): string {
  //   let indexNote = Object.values(chromaticScale).indexOf(note);
  //   let indexNoteScale = this.scale.indexOf(indexNote);
  //   if (indexNoteScale !== -1) {
  //     return this.generateScalesService.intervals[indexNoteScale];

  //   return '';
  // }
}

interface Keys {
  color: string;
  note: string;
  interval?: string;
}
