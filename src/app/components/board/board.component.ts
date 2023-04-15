import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  counter(num: number) {
    let lista = [];

    for (let i = 1; i <= 24; i++) {
      lista.push(i);
    }
    return lista;
  }



  getNotesToFret(fretPosition: number) {
    return this.notasBoardDefault[fretPosition];

  }

  notasBoardDefault: NotasBoard = {
    0: ["E", "B", "G", "D", "A", "E"],
    1: ["F", "C", "G#", "D#", "A#", "F"],
    2: ["F#", "C#", "A", "E", "B", "F#"],
    3: ["G", "D", "A#", "F", "C", "G"],
    4: ["G#", "D#", "B", "F#", "C#", "G#"],
    5: ["A", "E", "C", "G", "D", "A"],
    6: ["A#", "F", "C#", "G#", "D#", "A#"],
    7: ["B", "F#", "D", "A", "E", "B"],
    8: ["C", "G", "D#", "A#", "F", "C"],
    9: ["C#", "G#", "E", "B", "F#", "C#"],
    10: ["D", "A", "F", "C", "G", "D"],
    11: ["D#", "A#", "F#", "C#", "G#", "D#"],
    12: ["E", "B", "G", "D", "A", "E"],
    13: ["F", "C", "G#", "D#", "A#", "F"],
    14: ["F#", "C#", "A", "E", "B", "F#"],
    15: ["G", "D", "A#", "F", "C", "G"],
    16: ["G#", "D#", "B", "F#", "C#", "G#"],
    17: ["A", "E", "C", "G", "D", "A"],
    18: ["A#", "F", "C#", "G#", "D#", "A#"],
    19: ["B", "F#", "D", "A", "E", "B"],
    20: ["C", "G", "D#", "A#", "F", "C"],
    21: ["C#", "G#", "E", "B", "F#", "C#"],
    22: ["D", "A", "F", "C", "G", "D"],
    23: ["D#", "A#", "F#", "C#", "G#", "D#"],
    24: ["E", "B", "G", "D", "A", "E"],
  }

  heigth = '120px';
}

interface NotasBoard {  [key: number]: string[]; }
