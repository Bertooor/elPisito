import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from 'src/app/models/entity';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-add-inmueble',
  templateUrl: './add-inmueble.component.html',
  styleUrls: ['./add-inmueble.component.css'],
})
export class AddInmuebleComponent implements OnInit {
  nFases: number = 2;
  cargaCompletada: Boolean = false;
  fasesCargadas: number = 0;

  aPoblaciones: any[];
  aTipos: any[];

  inmueble: Inmueble = {
    activo: 1,
    apertura: '',
    ascensor: 0,
    cp: '',
    descripcion: '',
    plazasGarage: 0,
    jardin: 0,
    nBalcones: 0,
    nBanhos: 0,
    nHabitaciones: 0,
    nombreVia: '',
    numero: '',
    orientacion: '',
    piscina: 0,
    planta: '',
    portada: 0,
    precio: 0,
    puerta: '',
    superficieConstruida: '',
    superficieUtil: '',
    tendedero: 0,
    tipoCalefaccion: '',
    titular: '',
    via: '',
    poblacion: {
      nombre: '',
      provincia: {
        nombre: '',
        activo: '',
      },
      activo: '',
    },
    amueblado: 0,
    trastero: 0,
    tipo: {
      nombre: '',
      activo: '',
    },
  };

  constructor(
    private _poblacionService: PoblacionService,
    private _router: Router,
    private _tipoService: TipoService,
    private _inmuebleService: InmuebleService
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._poblacionService.getPoblaciones().subscribe({
      next: (datos) => {
        this.aPoblaciones = datos;
        console.log('getPoblaciones: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this.faseCarga();
      },
    });

    this._tipoService.getTipos().subscribe({
      next: (datos) => {
        this.aTipos = datos;
        console.log('getTipos: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this.faseCarga();
      },
    });
  }

  add(): void {
    this.inmueble.ascensor = Number(this.inmueble.ascensor);
    this.inmueble.jardin = Number(this.inmueble.jardin);
    this.inmueble.amueblado = Number(this.inmueble.amueblado);
    this.inmueble.trastero = Number(this.inmueble.trastero);
    this.inmueble.piscina = Number(this.inmueble.piscina);
    this.inmueble.portada = Number(this.inmueble.portada);
    this.inmueble.tendedero = Number(this.inmueble.tendedero);

    this._inmuebleService.addInmueble(this.inmueble).subscribe({
      next: (datos) => {
        console.log('addInmueble: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this._router.navigate(['/list-inmueble']);
      },
    });
  }

  faseCarga(): void {
    this.fasesCargadas++;

    if (this.fasesCargadas === this.nFases) {
      this.cargaCompletada = true;
    }
  }
}
