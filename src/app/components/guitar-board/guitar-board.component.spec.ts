import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarBoardComponent } from './guitar-board.component';

describe('BoardComponent', () => {
  let component: GuitarBoardComponent;
  let fixture: ComponentFixture<GuitarBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitarBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuitarBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
