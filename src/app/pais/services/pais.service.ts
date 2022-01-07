import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  private apiUrlNueva: string = 'https://restcountries.com/v2'

  get httpParams() {
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrlNueva}/name/${termino}`;
    return this.http.get<Country[]>(url, { params : this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrlNueva}/capital/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  
  getPaisPorCodigo(alpha2Code: string): Observable<Country> {

    const url = `${this.apiUrlNueva}/alpha/${alpha2Code}`;
    return this.http.get<Country>(url);
  }

  getPaisesPorRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrlNueva}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, {params: this.httpParams})
      .pipe(
        tap( console.log )
      )
  }
}
