import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "Colombia"

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(){
    console.log(this.termino);

    this.paisService.buscarPais( this.termino )
      .subscribe((resp) => {
        console.log(resp);
      })
  }

}
