import { DictString } from '../../shared/notes';
import { Component, Input, OnInit } from '@angular/core';
import { chromaticScale, Board, nuttDefaultNotes } from 'src/app/shared/notes';
import { GenerateScalesService } from 'src/app/shared/generate-scales.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(private generateScales: GenerateScalesService) {}

  notasBoardDefault: Board = {};
  @Input() customTuning?: DictString;
  @Input() numberFrets = 12;
  @Input() heigth = '170px';
  @Input() tonica: string = 'C';
  @Input() scaleType: string = 'major'; // major, menorNatural, menorHarmonic, menorMelodic
  @Input() colorScale = 'green';
  @Input() scale: string[] = [];
  @Input() scaleTwo: string[] = [];
  @Input() scaleThree: string[] = [];
  @Input() scaleFour: string[] = [];
  @Input() isMultipleScales: boolean = false;


  ngOnInit(): void {
    this.notasBoardDefault = this.createBoard();
    if (this.scale.length === 0) {
      this.scale = this.generateScales.generateScaleSevenNotes(
        this.scaleType,
        this.tonica
      );
    }
  }

  counter(num: number) {
    let lista = [];

    for (let i = 1; i <= num; i++) {
      lista.push(i);
    }
    return lista;
  }

  getNotesToFret(fretPosition: number) {
    return this.notasBoardDefault[fretPosition];
  }

  createBoard(): Board {
    let board: Board = {};

    for (let fret = 0; fret <= this.numberFrets; fret++) {
      for (let note = 0; note < 6; note++) {
        if (fret === 0) {
          board[fret] =
            this.customTuning != undefined
              ? Object.values(this.customTuning)
              : Object.values(nuttDefaultNotes);
          continue;
        }
        let prevNotes = board[fret - 1];

        board[fret] = prevNotes.map((nota) => {
          let indexNote = Object.values(chromaticScale).indexOf(nota);
          let nextNote = indexNote + 1;
          if (nextNote > 11) {
            nextNote = 0;
          }
          return Object.values(chromaticScale)[nextNote];
        });
      }
    }

    return board;
  }

  verifyIfNoteIsInScale(note: string): string[] {
    let indexScale = this.scale.indexOf(note);
    let indexScaleTwo = this.scaleTwo.indexOf(note);
    let indexScaleThree = this.scaleThree.indexOf(note);
    let indexScaleFour = this.scaleFour.indexOf(note);
    if (indexScale === -1 && indexScaleTwo === -1 && indexScaleThree === -1 ) {
      return ['white'];
    }
    if (this.isMultipleScales){
      if (indexScale !== -1 && indexScaleTwo === -1 && indexScaleThree === -1 && indexScaleFour === -1) {
        return ["green"];
      }
      if (indexScale === -1 && indexScaleTwo !== -1 && indexScaleThree === -1 && indexScaleFour === -1) {
        return ['red']
      }
      if (indexScale === -1 && indexScaleTwo === -1 && indexScaleThree !== -1 && indexScaleFour === -1) {
        return ['yellow']
      }
      if (indexScale === -1 && indexScaleTwo === -1 && indexScaleThree === -1 && indexScaleFour !== -1) {
        return ['blue']
      }
      if (indexScale !== -1 && indexScaleTwo !== -1 && indexScaleThree === -1 && indexScaleFour === -1) {
        return ['greenAndRed'];
      }
      if (indexScale !== -1 && indexScaleTwo === -1 && indexScaleThree !== -1 && indexScaleFour === -1) {
        return ['greenAndYellow'];
      }
      if (indexScale !== -1 && indexScaleTwo === -1 && indexScaleThree === -1 && indexScaleFour !== -1) {
        return ['greenAndBlue'];
      }
      if (indexScale === -1 && indexScaleTwo !== -1 && indexScaleThree !== -1 && indexScaleFour === -1) {
        return ['redAndYellow'];
      }
      if (indexScale === -1 && indexScaleTwo !== -1 && indexScaleThree === -1 && indexScaleFour !== -1) {
        return ['redAndBlue'];
      }
      if (indexScale === -1 && indexScaleTwo === -1 && indexScaleThree !== -1 && indexScaleFour !== -1) {
        return ['yellowAndBlue'];
      }
      if (indexScale !== -1 && indexScaleTwo !== -1 && indexScaleThree !== -1 && indexScaleFour === -1) {
        return ['greenAndRedAndYellow'];
      }
      if (indexScale !== -1 && indexScaleTwo !== -1 && indexScaleThree === -1 && indexScaleFour !== -1) {
        return ['greenAndRedAndBlue'];
      }
      if (indexScale !== -1 && indexScaleTwo === -1 && indexScaleThree !== -1 && indexScaleFour !== -1) {
        return ['greenAndYellowAndBlue'];
      }
      if (indexScale === -1 && indexScaleTwo !== -1 && indexScaleThree !== -1 && indexScaleFour !== -1) {
        return ['redAndYellowAndBlue'];
      }

      if (indexScale !== -1 && indexScaleTwo !== -1 && indexScaleThree !== -1 && indexScaleFour !== -1) {
        return ['greenAndRedAndYellowAndBlue'];
      }

    }



    return [this.colorScale];
  }
}
