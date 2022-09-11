import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ContadorModule {}
