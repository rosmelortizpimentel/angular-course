import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [HeroeComponent, ListadoComponent],
  imports: [CommonModule, MatButtonModule],
})
export class HeroresModule {}
