import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

import { NumberService } from './_services/number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Random Number Generator';
  maximumTotal = 10000;
  minimumTotal = 1;
  minimumNumber: number;
  maximumNumber: number;
  numbers = [];
  sortOrderList = this.numberService.sortOrder;
  sortOrder = 'ascending';
  downloadSucceded: boolean;

  constructor(
    private numberService: NumberService,
    private fileSaverService: FileSaverService) {}

  generateNumbers(total: number = 10) {
    this.numberService.generateRandomNumbers(total)
      .subscribe((newNumbers) => {
        this.numbers = newNumbers;
        this.sortNumbers(this.sortOrder);
        this.setMaxAndMinNumber();
      });
  }

  setMaxAndMinNumber() {
    this.minimumNumber = this.numbers[0];
    this.maximumNumber = this.numbers[this.numbers.length - 1];
  }

  sortNumbers(order: string) {
    if (this.numbers.length) {
      if (order === 'ascending') {
        this.numbers.sort((a, b) => {
          return a - b;
        });
      } else if (order === 'descending') {
        this.numbers.sort((a, b) => {
          return b - a;
        });
      }
    }
  }

  downloadNumbers() {
    let textFileData = '';
    textFileData += `Total Numbers generated:  ${this.numbers.length}\r\n`;
    textFileData += `Minimum Number: ${this.minimumNumber}\r\n`;
    textFileData += `Maximum Number: ${this.maximumNumber}\r\n`;
    textFileData += `Saved on: ${new Date(Date.now()).toTimeString()}\r\n`;
    textFileData += 'Numbers Generated:\r\n';
    textFileData += '================================================\r\n';
    for (const num of  this.numbers) {
      textFileData += `${num}\r\n`;
    }

    const textFileblob = new Blob([textFileData], {type: 'text/plain;charset=utf-8'});
    return this.fileSaverService.save(textFileblob, 'numbers.txt');
  }

  ngOnInit() {
    this.generateNumbers();
  }
}
