import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAddComponent } from './number-add.component';

describe('NumberAddComponent', () => {
  let component: NumberAddComponent;
  let fixture: ComponentFixture<NumberAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
