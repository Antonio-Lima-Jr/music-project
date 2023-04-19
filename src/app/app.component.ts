import { Component } from '@angular/core';
import { DictString } from './shared/notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Music';

  numberFrets: number = 24;

  customTuning: DictString = {
    0: 'E',
    1: 'C',
    2: 'G',
    3: 'D',
    4: 'A',
    5: 'E',
  };
  scales: string[] = ['C', 'E', 'G', 'B'];

  c: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  dm: string[] = ['D', 'F', 'A', 'C', 'E', 'G', 'B'];
  em: string[] = ['E', 'G', 'B', 'D', 'F', 'A', 'C'];
  f: string[] = ['F', 'A', 'C', 'E', 'G', 'B', 'D'];
  g: string[] = ['G', 'B', 'D', 'F', 'A', 'C', 'E'];
  am: string[] = ['A', 'C', 'E', 'G', 'B', 'D', 'F'];
  bm: string[] = ['B', 'D', 'F', 'A', 'C', 'E', 'G'];
}
