import { VillanoComponent } from './villano/villano.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    VillanoComponent
  ],

  exports: [
    VillanoComponent
  ],

  imports: [
    CommonModule
  ]
})


export class VillanoModule{

}

