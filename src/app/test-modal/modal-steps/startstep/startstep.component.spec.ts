import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartstepComponent } from './startstep.component';

describe('StartstepComponent', () => {
  let component: StartstepComponent;
  let fixture: ComponentFixture<StartstepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartstepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartstepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
