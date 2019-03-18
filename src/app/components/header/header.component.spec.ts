import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let downloadDe;
  let downloadEl;
  let generateNumbersDe;
  let generateNumbersEl;
  let sortDe;
  let sortEl;

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
    component.maximumTotal = 10000;
    component.minimumTotal = 1;
    component.minimumNumber = '0015556106';
    component.maximumNumber = '0817099553';
    component.sortOrderList = [
      { name: 'Ascending', value: 'ascending'},
      { name: 'Descending', value: 'descending'}
    ];
    fixture.detectChanges();

    downloadDe =  fixture.debugElement.query(By.css('#download'));
    downloadEl = downloadDe.nativeElement;

    generateNumbersDe =  fixture.debugElement.query(By.css('#generatenum'));
    generateNumbersEl = generateNumbersDe.nativeElement;

    sortDe = fixture.debugElement.query(By.css('#sort'));
    sortEl = sortDe.nativeElement;
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should have passed input values', () => {
    expect(component.minimumTotal).toBe(1);
    expect(component.maximumTotal).toBe(10000);
    expect(component.minimumNumber).toBe('0015556106');
    expect(component.maximumNumber).toBe('0817099553');
    expect(component.sortOrderList[0].name).toBe('Ascending');
    expect(component.sortOrderList[0].value).toBe('ascending');
  });

  it('should have Download as text', () => {
    expect(downloadEl.textContent).toContain('Download');
  });

  it('should emit download file event', () => {
    let downloadEvent;
    component.downloadNumbers.subscribe((event) => { downloadEvent = 'event'; });
    downloadDe.triggerEventHandler('click', null);
    expect(downloadEvent).toBe('event');
  });

  it('should emit Generate Numbers event', () => {
    let totalNumbers;
    component.totalNumbers = 1000;
    component.generateNewNumbers.subscribe((total) => totalNumbers = total);
    generateNumbersDe.triggerEventHandler('click', null);
    expect(generateNumbersEl.textContent).toContain('Generate Numbers');
    expect(totalNumbers).toBe(1000);
  });

  it('should not generate numbers if total is invalid', () => {
    let totalNumbers;
    component.totalNumbers = -1;
    component.generateNewNumbers.subscribe((total) => totalNumbers = total);
    generateNumbersDe.triggerEventHandler('click', null);
    expect(generateNumbersEl.textContent).toContain('Generate Numbers');
    expect(totalNumbers).toBe(undefined);
  });

  it('should emit sorting event when a user changes sort order', () => {
    let sortEvent;
    component.sortNumbers.subscribe((order) => sortEvent = order);
    sortEl.value = sortEl.options[1].value;
    sortEl.dispatchEvent(new Event('change'));
    sortDe.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(sortEvent).toBeTruthy();
  });
});
