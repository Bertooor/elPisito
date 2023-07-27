import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poblacion } from 'src/app/models/entity';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-add-poblacion',
  templateUrl: './add-poblacion.component.html',
  styleUrls: ['./add-poblacion.component.css'],
})
export class AddPoblacionComponent implements OnInit {
  aDatos: any[];
  id: number;
  poblacion: Poblacion = {
    nombre: '',
    provincia: {
      nombre: '',
      activo: '',
    },
    activo: '',
  };

  constructor(
    private _poblacionService: PoblacionService,
    private _router: Router,
    private _provinciaService: ProvinciaService
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos() {
    this._provinciaService.getProvincias().subscribe({
      next: (datos) => {
        this.aDatos = datos;
        console.log('getProvincias: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });
  }

  add(): void {
    this.poblacion.nombre = this.poblacion.nombre.toUpperCase();
    this.poblacion.activo = 1;
    this._poblacionService.addPoblacion(this.poblacion).subscribe({
      next: (datos) => {
        console.log('addTipo: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this._router.navigate(['/list-poblacion']);
      },
    });
  }
}
