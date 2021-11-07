import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = ""
  hayError: boolean = false;
  paises: Country[] = [];
  placeholder: string = "Buscar por Capital";

  

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )
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


}
