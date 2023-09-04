import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-list-inmueble',
  templateUrl: './list-inmueble.component.html',
  styleUrls: ['./list-inmueble.component.css'],
})
export class ListInmuebleComponent implements OnInit {
  aDatos: any[];

  constructor(
    private _inmuebleService: InmuebleService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    this._inmuebleService.getInmuebles().subscribe({
      next: (datos) => {
        this.aDatos = datos;
        console.log('getInmuebles: ', datos);
      },
      error: (error) => {
        this._router.navigate(['/error']);
      },
      complete: () => {},
    });
  }
}
