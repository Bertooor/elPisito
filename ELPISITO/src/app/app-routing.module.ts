import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Main/home/home.component';
import { ErrorComponent } from './components/Main/error/error.component';
import { DetailInmuebleComponent } from './components/Main/detail-inmueble/detail-inmueble.component';
import { AddTipoComponent } from './components/Main/add-tipo/add-tipo.component';
import { ListTipoComponent } from './components/Main/list-tipo/list-tipo.component';
import { EditTipoComponent } from './components/Main/edit-tipo/edit-tipo.component';
import { AddProvinciaComponent } from './components/Main/add-provincia/add-provincia.component';
import { ListProvinciaComponent } from './components/Main/list-provincia/list-provincia.component';
import { EditProvinciaComponent } from './components/Main/edit-provincia/edit-provincia.component';
import { AddPoblacionComponent } from './components/Main/add-poblacion/add-poblacion.component';
import { ListPoblacionComponent } from './components/Main/list-poblacion/list-poblacion.component';
import { EditPoblacionComponent } from './components/Main/edit-poblacion/edit-poblacion.component';
import { AddInmuebleComponent } from './components/Main/add-inmueble/add-inmueble.component';
import { ListInmuebleComponent } from './components/Main/list-inmueble/list-inmueble.component';
import { EditInmuebleComponent } from './components/Main/edit-inmueble/edit-inmueble.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inmueble/:id', component: DetailInmuebleComponent },
  { path: 'add-tipo', component: AddTipoComponent },
  { path: 'list-tipo', component: ListTipoComponent },
  { path: 'edit-tipo/:id', component: EditTipoComponent },
  { path: 'add-provincia', component: AddProvinciaComponent },
  { path: 'list-provincia', component: ListProvinciaComponent },
  { path: 'edit-provincia/:id', component: EditProvinciaComponent },
  { path: 'add-poblacion', component: AddPoblacionComponent },
  { path: 'list-poblacion', component: ListPoblacionComponent },
  { path: 'edit-poblacion/:id', component: EditPoblacionComponent },
  { path: 'add-inmueble', component: AddInmuebleComponent },
  { path: 'list-inmueble', component: ListInmuebleComponent },
  { path: 'edit-inmueble', component: EditInmuebleComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
