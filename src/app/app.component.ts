import { Component } from '@angular/core';
import { DictString } from './shared/notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Music';

  customTuning: DictString = {
    0: 'E',
    1: 'C',
    2: 'G',
    3: 'D',
    4: 'A',
    5: 'E',
  };
}
