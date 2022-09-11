import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  styleUrls: ['./contador.component.css'],
  templateUrl: './contador.component.html',
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
