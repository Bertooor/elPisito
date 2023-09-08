import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-add-imagen',
  templateUrl: './add-imagen.component.html',
  styleUrls: ['./add-imagen.component.css'],
})
export class AddImagenComponent implements OnInit {
  id: number;
  urlImagen: string;
  aImagenes: string[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _mediaService: MediaService
  ) {}
  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._route.params.subscribe({
      next: (datos) => {
        this.id = datos['id'];
        console.log('idImagen: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });
  }

  upload(e: any): void {
    const file = e.target.files[0];

    if (file) {
      for (let file of e.target.files) {
        const formData = new FormData();
        this._mediaService.uploadFile(formData, this.id).subscribe({
          next: (datos) => {
            this.urlImagen = datos.url;
            this.aImagenes.push(this.urlImagen);
            console.log('aImagenes: ', this.aImagenes);
            console.log('datosImagenes: ', datos);
          },
          error: (error) => {
            this._router.navigate(['/error']);
          },
          complete: () => {},
        });
      }
    }
  }
}
