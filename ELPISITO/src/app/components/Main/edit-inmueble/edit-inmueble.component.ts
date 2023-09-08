import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inmueble } from 'src/app/models/entity';
import { InmuebleService } from 'src/app/services/inmueble.service';
import { PoblacionService } from 'src/app/services/poblacion.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-edit-inmueble',
  templateUrl: './edit-inmueble.component.html',
  styleUrls: ['./edit-inmueble.component.css'],
})
export class EditInmuebleComponent implements OnInit {
  nFases: number = 3;
  cargaCompletada: Boolean = false;
  fasesCargadas: number = 0;

  id: number;
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
    private _route: ActivatedRoute,
    private _router: Router,
    private _inmuebleService: InmuebleService,
    private _tipoService: TipoService,
    private _poblacionService: PoblacionService
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._route.params.subscribe({
      next: (datos) => {
        this.id = datos['id'];
        console.log('idInmueble: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });

    this._inmuebleService.getInmueble(this.id).subscribe({
      next: (datos) => {
        datos.activo = Boolean(datos.activo);
        datos.ascensor = Boolean(datos.ascensor);
        datos.jardin = Boolean(datos.jardin);
        datos.amueblado = Boolean(datos.amueblado);
        datos.trastero = Boolean(datos.trastero);
        datos.piscina = Boolean(datos.piscina);
        datos.portada = Boolean(datos.portada);
        datos.tendedero = Boolean(datos.tendedero);

        this.inmueble = datos;
        console.log('datos inmueble: ', datos);
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
        console.log('gettipos: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this.faseCarga();
      },
    });

    this._poblacionService.getPoblaciones().subscribe({
      next: (datos) => {
        this.aPoblaciones = datos;
        console.log('poblaciones: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this.faseCarga();
      },
    });
  }

  edit(): void {
    this.inmueble.activo = Number(this.inmueble.activo);
    this.inmueble.ascensor = Number(this.inmueble.ascensor);
    this.inmueble.jardin = Number(this.inmueble.jardin);
    this.inmueble.amueblado = Number(this.inmueble.amueblado);
    this.inmueble.trastero = Number(this.inmueble.trastero);
    this.inmueble.piscina = Number(this.inmueble.piscina);
    this.inmueble.portada = Number(this.inmueble.portada);
    this.inmueble.tendedero = Number(this.inmueble.tendedero);

    this._inmuebleService.updateInmueble(this.inmueble).subscribe({
      next: (datos) => {
        console.log('update inmueble: ', datos);
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
