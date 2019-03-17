import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  sortOrder = [
    {name: 'Ascending', value: 'ascending'},
    {name: 'Descending', value: 'descending'}
  ];

  generateRandomNumbers(totalNumbers: number = 10): Observable<any> {
    const numbers = new Set();
    for (let num = 0; numbers.size < totalNumbers; num++) {
      const generatedNumber = this.makeNumberTenDigitStartingWithZero(this.generateRandomNumber().toString());
      numbers.add(generatedNumber);
    }

    return of (Array.from(numbers));
  }

  private generateRandomNumber() {
    return Math.floor((Math.random() * 999999999) + 0);
  }

  private makeNumberTenDigitStartingWithZero(generatedNumber) {
    const numberDigits = 10;
    const maximunLengthOfGeneratedNumber = 9;
    const zeroDigit = 0;
    if (generatedNumber.length < maximunLengthOfGeneratedNumber) {
      const missingDigits = numberDigits - generatedNumber.length;
      for (let digit = 0; digit < missingDigits; digit++) {
        generatedNumber = zeroDigit + generatedNumber;
      }
    } else {
      generatedNumber = zeroDigit + generatedNumber;
    }
    return generatedNumber;
  }
}
