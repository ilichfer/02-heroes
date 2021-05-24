import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe : any= {}

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesServices: HeroesService) { 

    

    this.activatedRoute.params.subscribe(params=>{
      this.heroe = _heroesServices.getHeroe(params['id']);
     console.log('el indice capturado  en heroe componentes : '+this.heroe);
    });
  }



}
