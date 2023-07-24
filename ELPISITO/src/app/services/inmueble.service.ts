import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inmueble } from '../models/entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InmuebleService {
  url: string = GLOBAL.url;

  constructor(
    private _http: HttpClient,
  ) {}

  getInmuebles(): Observable<Inmueble[]> {
    let headers = new HttpHeaders().set('content-type', 'application/json');
    return this._http.get<Inmueble[]>(this.url + 'inmuebles', { headers });
  }

  getInmueblesPortada(): Observable<Inmueble[]> {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.get<Inmueble[]>(this.url + 'inmuebles-portada', {
      headers,
    });
  }

  getInmueble(id: number): Observable<Inmueble> {
    let headers = new HttpHeaders().set('content-type', 'application/json');

    return this._http.get<Inmueble>(this.url + 'inmueble/' + id, { headers });
  }
}
