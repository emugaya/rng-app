import { Component, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() maximumTotal;
  @Input() minimumTotal;
  @Input() maximumNumber;
  @Input() minimumNumber;
  @Input() sortOrderList;
  @Output() generateNewNumbers: EventEmitter<any> = new EventEmitter();
  @Output() sortNumbers: EventEmitter<any> = new EventEmitter();
  @Output() downloadNumbers: EventEmitter<any> = new EventEmitter();

  totalNumbers = 10;

  constructor() { }

  createNumbers() {
    this.generateNewNumbers.emit(this.totalNumbers);
  }

  orderNumbers(sortOrder) {
    this.sortNumbers.emit(sortOrder);
  }

  downloadFile() {
    this.downloadNumbers.emit();
  }

}
