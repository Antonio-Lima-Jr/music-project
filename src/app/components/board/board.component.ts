import { DictString } from './../../shared/notes';
import { Component, Input, OnInit } from '@angular/core';
import {
  chromaticScale,
  Board,
  nuttDefaultNotes,
} from 'src/app/shared/notes';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  notasBoardDefault: Board = {};

  @Input() customTuning?: DictString;

  numberFrets = 24;

  heigth = '120px';

  ngOnInit(): void {
    this.notasBoardDefault = this.createBoard();
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
}
