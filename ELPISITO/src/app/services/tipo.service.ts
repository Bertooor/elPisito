import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tipo } from '../models/entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TipoService {
  url: string = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  addTipo(tipo: Tipo): Observable<Tipo> {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.post<Tipo>(this.url + 'tipo', tipo, { headers });
  }

  getTipos(): Observable<Tipo[]> {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.get<Tipo[]>(this.url + 'tipos', { headers });
  }

  getTipo(id: number): Observable<Tipo> {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.get<Tipo>(this.url + 'tipo/' + id, { headers });
  }

  updateTipo(tipo: Tipo): Observable<Tipo> {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.put<Tipo>(this.url + 'tipo', tipo, { headers });
  }
}
