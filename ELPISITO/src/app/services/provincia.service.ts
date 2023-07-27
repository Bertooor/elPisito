import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../models/entity';

@Injectable({
  providedIn: 'root',
})
export class ProvinciaService {
  url: string = GLOBAL.url;

  constructor(private _http: HttpClient) {}

  addProvincia(provincia: Provincia): Observable<Provincia> {
    return this._http.post<Provincia>(this.url + 'provincia', provincia);
  }

  getProvincias(): Observable<Provincia[]> {
    return this._http.get<Provincia[]>(this.url + 'provincias');
  }

  getProvincia(id: number): Observable<Provincia> {
    return this._http.get<Provincia>(this.url + 'provincia/' + id);
  }

  updateProvincia(provincia: Provincia): Observable<Provincia> {
    return this._http.put<Provincia>(this.url + 'provincia', provincia);
  }
}
