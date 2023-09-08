import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Provincia } from 'src/app/models/entity';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-edit-provincia',
  templateUrl: './edit-provincia.component.html',
  styleUrls: ['./edit-provincia.component.css'],
})
export class EditProvinciaComponent implements OnInit {
  id: number;
  provincia: Provincia = {
    nombre: '',
    activo: '',
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _provinciaService: ProvinciaService
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._route.params.subscribe({
      next: (datos) => {
        this.id = datos['id'];
        console.log('idProvincia: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });

    this._provinciaService.getProvincia(this.id).subscribe({
      next: (datos) => {
        datos.activo = Boolean(datos.activo);
        this.provincia = datos;
        console.log('getProvincia: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });
  }

  edit(): void {
    this.provincia.activo = Number(this.provincia.activo);
    this._provinciaService.updateProvincia(this.provincia).subscribe({
      next: (datos) => {
        console.log('update-provincia: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this._router.navigate(['/list-provincia']);
      },
    });
  }
}
