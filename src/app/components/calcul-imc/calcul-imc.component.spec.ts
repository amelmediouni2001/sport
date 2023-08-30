import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculImcComponent } from './calcul-imc.component';

describe('CalculImcComponent', () => {
  let component: CalculImcComponent;
  let fixture: ComponentFixture<CalculImcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculImcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
