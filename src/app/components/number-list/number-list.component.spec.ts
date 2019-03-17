import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { NumberListComponent } from './number-list.component';

describe('NumberListComponent', () => {
  let component: NumberListComponent;
  let fixture: ComponentFixture<NumberListComponent>;
  const numberList = ['0015556106', '0817099553'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberListComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberListComponent);
    component = fixture.componentInstance;
    component.numbers = numberList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have passed numbers list', () => {
    expect(component.numbers).toBeTruthy();
    expect(component.numbers).toBe(numberList);
  });
});
