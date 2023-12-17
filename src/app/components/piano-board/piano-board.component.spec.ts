import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoBoardComponent } from './piano-board.component';

describe('PianoBoardComponent', () => {
  let component: PianoBoardComponent;
  let fixture: ComponentFixture<PianoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
