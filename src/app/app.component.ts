import { Component, OnInit } from '@angular/core';
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

  constructor(private numberService: NumberService) {}

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
    this.downloadSucceded = false;
    console.log('download numbers clicked');
    this.downloadSucceded = true;
  }

  ngOnInit() {
    this.generateNumbers();
  }
}
