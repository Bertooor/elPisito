import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/services/inmueble.service';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css'],
})
export class ListHomeComponent implements OnInit {
  titular: string = 'Los más interesantes...';
  aDatos: any[] = [];

  constructor(private _inmuebleService: InmuebleService) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
    console.log(
      this._inmuebleService.getInmuebles().subscribe({
        next: (datos) => {
          console.log('datos: ', datos);
          this.aDatos = datos;
        },
        error: (error) => {},
        complete: () => {},
      })
    );
  }
}
