import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor(
      private activatedRoute: ActivatedRoute,
      private paisService: PaisService
      ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.paisService.getPaisPorCodigo(param.id) ),
        tap( console.log )
      )
      .subscribe( pais => {
        this.pais = pais[0]
      })
    

    // Forma larga de consumir el params del la url
    // this.activatedRoute.params
    //   .subscribe(({id}) => {
    //     console.log(id)

    //     this.paisService.getPaisPorCodigo( id )
    //       .subscribe( pais => {
    //         console.log(pais)
    //       })
    //   })

  }

}
