import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaService {
  url: string = GLOBAL.url_media;

  constructor(private _http: HttpClient) {}

  uploadFile(formData: FormData, id: number): Observable<any> {
    return this._http.post(this.url + 'upload/' + id, formData);
  }
}
