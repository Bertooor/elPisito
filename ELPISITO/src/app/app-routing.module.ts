import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Main/home/home.component';
import { ErrorComponent } from './components/Main/error/error.component';
import { DetailInmuebleComponent } from './components/Main/detail-inmueble/detail-inmueble.component';
import { AddTipoComponent } from './components/Main/add-tipo/add-tipo.component';
import { ListTipoComponent } from './components/Main/list-tipo/list-tipo.component';
import { EditTipoComponent } from './components/Main/edit-tipo/edit-tipo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'inmueble/:id', component: DetailInmuebleComponent },
  { path: 'add-tipo', component: AddTipoComponent },
  { path: 'list-tipo', component: ListTipoComponent },
  { path: 'edit-tipo/:id', component: EditTipoComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
