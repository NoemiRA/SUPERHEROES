import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  constructor() { }

  villanos: string[] = ['LOKI', 'VENOM', 'THANOS', 'DORMAMMU', 'HELA', 'CRANEO ROJO', 'DUENDE VERDE', 'LEX LUTHOR'];
  poder: string[] = ['Inteligencia sobrehumana y descarga de energia', 'Agilidad sobrehumana y adherirse a cualquer cuerpo',
   'Enorme fuerza sobrehumana y energias cosmicas', 'Manipulacion mistica de la energia y teletransportación',
   'Fuerza, resistencia sobrehumana y reencarnacion', 'Estratega de nivel y cientifico y fuerza sobrehumana',
   'Super fuerza', 'Inteligencia'];
  grado: number[] = [465,298,985,876,140,269,747,324];

  base = 1;

  ngOnInit() {
  }


  acumular(valor: number, i:number){
    this.grado[i] += valor;

  }

}

