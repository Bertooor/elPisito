import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-list-provincia',
  templateUrl: './list-provincia.component.html',
  styleUrls: ['./list-provincia.component.css'],
})
export class ListProvinciaComponent implements OnInit {
  aDatos: any[];

  constructor(
    private _provinciaService: ProvinciaService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(): void {
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
}
