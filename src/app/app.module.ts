import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FileSaverModule } from 'ngx-filesaver';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NumberListComponent } from './components/number-list/number-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumberListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileSaverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
