import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = ""
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
      .subscribe((paises) => {
        console.log(paises)
        this.paises = paises;
      }, (err) => {
        if(err.status === 404){
          this.hayError = true;
          this.paises = [];
        }
      })
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: crear sugerencias
  }

}
