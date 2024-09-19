import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbzModule } from '../dbz/dbz.module';


@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DbzModule
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
