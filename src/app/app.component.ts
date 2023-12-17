import { Component } from '@angular/core';
import { DictString, Notes } from './shared/notes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Music';
  d: string[] = [ 'D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
  bm: string[] = ['B', 'D', 'F#', 'A', 'C#', 'E', 'G'];
  em: string[] = ['E', 'G', 'B', 'D', 'F', 'A', 'C'];
  f: string[] = ['F', 'A', 'C', 'E', 'G', 'B', 'D'];
  g: string[] = ['G', 'B', 'D', 'F#', 'A', 'C#', 'E'];
  am: string[] = ['A', 'C', 'E', 'G', 'B', 'D', 'F'];
  c: string[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  gm: string[] = ['G', 'A', 'B', 'C', 'D', 'E', 'F'];
}
