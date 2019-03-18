import { TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NumberListComponent } from './components/number-list/number-list.component';
import { NumberService } from './_services/number.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        NumberListComponent
      ],
      providers: [
        NumberService,
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should generate 1000 numbers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.generateNumbers(1000);
    expect(app.numbers.length).toEqual(1000, '1000 numbers generated');
  });

  it('should set maximun and minimun numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.generateNumbers(1000);
    expect(app.maximumNumber).toEqual(app.numbers[app.numbers.length - 1], 'maximum number set correctly');
    expect(app.minimumNumber).toEqual(app.numbers[0], 'maximum number set correctly');
  });

  it('should sort numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.sortNumbers('ascending');
    expect(app.numbers[0]).toBeLessThan(app.numbers[app.numbers.length - 1], 'numbers sorted in ascending order');
    app.sortNumbers('descending');
    expect(app.numbers[0]).toBeGreaterThan(app.numbers[app.numbers.length - 1], 'numbers sorted in ascending order');
  });

  it('should download text file succesfully', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    const downLoadDe = fixture.debugElement.query(By.css('#download'));
    const downLoadEl = downLoadDe.nativeElement;
    downLoadEl.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(app.downloadNumbers).toHaveBeenCalled();
    });
  });
});
