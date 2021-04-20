import { UpperCasePipe } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component} from '@angular/core';


@Component({
  selector: 'app-heroe',
  templateUrl:'./heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})

export class HeroeComponent{
  nombre: string = 'Saitama';
  edad: number = 30;

  obtenerNombre(): string{
    return this.nombre + ' - ' + this.edad;
  }

  cambiarNombre():void{
    this.nombre = 'Superman';
  }

  cambiarEdad(): void{
    this.edad = 38;
  }

  get cambiarMayuscula():string{
    return this.nombre.toUpperCase();
  }

}
