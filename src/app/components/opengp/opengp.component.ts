import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlphaTabApi, Settings } from '@coderline/alphatab';
import { ParserGpService } from './parser-gp.service';
import { MusicItem } from './utils/gp';

@Component({
  selector: 'app-opengp',
  templateUrl: './opengp.component.html',
  styleUrls: ['./opengp.component.scss']
})
export class OpengpComponent implements OnInit {
  event: any;
  @ViewChild('meuDiv') meuDiv: ElementRef<HTMLElement> | undefined;
  data: string = "";

  constructor(private parseGp: ParserGpService) { }


  ngOnInit(): void {
  }

  myGp(event: any) {
    this.parseGp.parseGpFile(event.target.files[0])
      .then((value: MusicItem) => {
        this.data = JSON.stringify(value);
        console.log(JSON.stringify(value));
      });
  }
}
