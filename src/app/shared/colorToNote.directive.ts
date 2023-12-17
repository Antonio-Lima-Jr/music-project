import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { colorByNoteAndInterval } from './notes';

@Directive({
  selector: '[setCss]',
})
export class ColorToNoteDirective implements OnInit {
  @Input('setCssNote') note: string = '';
  @Input('setCssScales') scale: string[] = [];
  @Input('setCssColor') color?: string;
  @Input('setCssByInterval') interval?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const stylesToDiv = this.calculateStyles();

    Object.entries(stylesToDiv).forEach(([key, value]) => {
      this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    });
  }

  private calculateStyles() {
    const noteOnScale = this.verifyNoteOnScale();

    if (!noteOnScale) {
      stylesToDiv.backgroundColor = '#fff';
      return stylesToDiv;
    }

    stylesToDiv.backgroundColor = this.color || this.getNoteColor();

    return stylesToDiv;
  }

  verifyNoteOnScale(): boolean {
    if (this.scale.includes(this.note)) {
      return true;
    }

    return false;
  }

  getNoteColor(): string {
    return colorByNoteAndInterval[this.scale[0][0]][this.interval || 'T'];
  }
}

const stylesToDiv = {
  width: '100%',
  height: '100%',
  borderRadius: '20%',
  boxSizing: 'border-box',
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  flexDirection: 'column',
  color: '#000',
  textShadow:
    '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff',
  backgroundColor: '',
  backgroundImage: '',
  backgroundSize: '50% 50%',
  backgroundPosition: 'top left, top right, bottom right, bottom left',
  backgroundRepeat: 'no-repeat',
};
