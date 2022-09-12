import { Component } from '@angular/core';

export interface Personjes {
  nombre: string;
  poder: number;
}

const DATA: Personjes[] = [
  { nombre: 'Goku', poder: 1.0079 },
  { nombre: 'Trunks', poder: 12.0079 },
  { nombre: 'Krillin', poder: 3.0079 },
  { nombre: 'Vegueta', poder: 5.0079 },
];

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public displayedColumns: string[] = ['nombre', 'poder'];
  public dataSource: Personjes[] = DATA;
}
