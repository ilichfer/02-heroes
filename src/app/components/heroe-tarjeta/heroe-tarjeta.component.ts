import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from "@angular/router";
import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any ={};
  @Input() index:number;

  @Output() heroeSeleccionado: EventEmitter<number>

  

  constructor( private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroes(){
  // let id = this.heroe.id;

      // console.log('el indice capturado es : '+this.index);
      this.router.navigate(['heroe',this.index]);
  // this.heroeSeleccionado.emit(this.index);
  }

}
