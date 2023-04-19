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
  @Input() numberFrets: number = 12;
  @Input() heigth = '240px';
  @Input() tonica: string = 'C';
  @Input() scaleType: string = 'major'; // major, menorNatural, menorHarmonic, menorMelodic
  @Input() colorScale?: string;
  @Input() scales?: string[] = [];
  intervals: DictString = {};

  ngOnInit(): void {
    this.notasBoardDefault = this.createBoard();

    if (this.scales === undefined || this.scales.length === 0) {
      this.scales = this.generateScales.generateScaleSevenNotes(
        this.scaleType,
        this.tonica
      );
    }

    this.intervals = this.generateScales.generateIntervalsByTonic(this.scales);
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
    const board: Board = {};

    const tuning = this.customTuning ?? nuttDefaultNotes;

    for (let fret = 0; fret <= this.numberFrets; fret++) {
      if (fret === 0) {
        board[fret] = Object.values(tuning);
        continue;
      }

      const prevNotes = board[fret - 1];

      board[fret] = prevNotes.map((note) => {
        const index = Object.values(chromaticScale).indexOf(note);
        const nextIndex = (index + 1) % 12;
        return Object.values(chromaticScale)[nextIndex];
      });
    }

    return board;
  }
}
