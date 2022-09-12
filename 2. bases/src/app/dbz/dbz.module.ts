import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [MatFormFieldModule,MatButtonModule, MatTableModule, MatInputModule, CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
