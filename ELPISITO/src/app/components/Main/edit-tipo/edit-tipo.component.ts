import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipo } from 'src/app/models/entity';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-edit-tipo',
  templateUrl: './edit-tipo.component.html',
  styleUrls: ['./edit-tipo.component.css'],
})
export class EditTipoComponent implements OnInit {
  id: number;
  tipo: Tipo = {
    nombre: '',
    activo: '',
  };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _tipoService: TipoService
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._route.params.subscribe({
      next: (datos) => {
        this.id = datos['id'];
        console.log('idTipo: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });

    this._tipoService.getTipo(this.id).subscribe({
      next: (datos) => {
        datos.activo = Boolean(datos.activo);
        this.tipo = datos;
        console.log('getTipo: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });
  }

  edit(): void {
    this.tipo.activo = Number(this.tipo.activo);
    this._tipoService.updateTipo(this.tipo).subscribe({
      next: (datos) => {
        console.log('edit-tipo: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {
        this._router.navigate(['/list-tipo']);
      },
    });
  }
}
