import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpengpComponent } from './opengp.component';

describe('OpengpComponent', () => {
  let component: OpengpComponent;
  let fixture: ComponentFixture<OpengpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpengpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpengpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
