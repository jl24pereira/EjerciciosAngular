import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroesFiltrados: Heroe[]=[];

  constructor( private _activatedRoute:ActivatedRoute, private _router:Router, private _heroeService: HeroesService) {

  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.heroesFiltrados = this._heroeService.buscarHeroes(params['termino']);
      console.log(this.heroesFiltrados);  
    });
  }

  // verHeroe(idx:number){
  //   this._router.navigate( ['/heroe',idx] );
  // }

}
