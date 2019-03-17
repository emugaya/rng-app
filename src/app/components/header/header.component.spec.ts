import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { By } from 'protractor';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  // let generateNumbersDe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.maximumTotal = 10;
    component.minimumTotal = 1;
    component.minimumNumber = '0015556106';
    component.maximumNumber = '0817099553';
    component.sortOrderList = [
      { name: 'Ascending', value: 'ascending'},
      { name: 'Descending', value: 'descending'}
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have passed input values', () => {
    expect(component.minimumTotal).toBe(1);
    expect(component.maximumTotal).toBe(10);
    expect(component.minimumNumber).toBe('0015556106');
    expect(component.maximumNumber).toBe('0817099553');
    expect(component.sortOrderList[0].name).toBe('Ascending');
    expect(component.sortOrderList[0].value).toBe('ascending');
  });
});
