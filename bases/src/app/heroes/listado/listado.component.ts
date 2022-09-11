import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Capitán America'];
  heroesBorrados: string[] = [];
  heroeBorrado: string = '';
  borrarHerroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
    this.heroesBorrados.push(this.heroeBorrado);
  }
}
