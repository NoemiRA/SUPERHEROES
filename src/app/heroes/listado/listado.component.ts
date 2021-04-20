import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent {


  heroes: string[] = ['Hulk', 'Saitama', 'Superman', 'Thor', 'Goku'];


     mensages: string[] = [];


    eliminar() {
       var cons =this.mensages.push(this.heroes[0]);
       this.heroes.shift();
       return cons;
    }
  }


