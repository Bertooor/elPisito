import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Header/header/header.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { HomeComponent } from './components/Main/home/home.component';
import { ErrorComponent } from './components/Main/error/error.component';
import { CabeceraFooterComponent } from './components/Footer/cabecera-footer/cabecera-footer.component';
import { MenuFooterComponent } from './components/Footer/menu-footer/menu-footer.component';
import { PieFooterComponent } from './components/Footer/pie-footer/pie-footer.component';
import { ListHomeComponent } from './components/Main/list-home/list-home.component';
import { FichaInmuebleComponent } from './components/Main/ficha-inmueble/ficha-inmueble.component';
import { CarouselFichaComponent } from './components/Main/carousel-ficha/carousel-ficha.component';
import { EurosPipe } from './pipes/euros.pipe';
import { NoImageDirective } from './directives/no-image.directive';
import { PreloaderComponent } from './preloader/preloader.component';
import { CarouselHomeComponent } from './components/Header/carousel-home/carousel-home.component';
import { DetailInmuebleComponent } from './components/Main/detail-inmueble/detail-inmueble.component';
import { AddTipoComponent } from './components/Main/add-tipo/add-tipo.component';
import { ListTipoComponent } from './components/Main/list-tipo/list-tipo.component';
import { EditTipoComponent } from './components/Main/edit-tipo/edit-tipo.component';
import { ActivoPipe } from './pipes/activo.pipe';
import { AddProvinciaComponent } from './components/Main/add-provincia/add-provincia.component';
import { ApiInterceptor } from './utils/api.interceptor';
import { ListProvinciaComponent } from './components/Main/list-provincia/list-provincia.component';
import { EditProvinciaComponent } from './components/Main/edit-provincia/edit-provincia.component';
import { AddPoblacionComponent } from './components/Main/add-poblacion/add-poblacion.component';
import { ListPoblacionComponent } from './components/Main/list-poblacion/list-poblacion.component';
import { EditPoblacionComponent } from './components/Main/edit-poblacion/edit-poblacion.component';
import { AddInmuebleComponent } from './components/Main/add-inmueble/add-inmueble.component';
import { ListInmuebleComponent } from './components/Main/list-inmueble/list-inmueble.component';
import { EditInmuebleComponent } from './components/Main/edit-inmueble/edit-inmueble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuPrincipalComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    CabeceraFooterComponent,
    MenuFooterComponent,
    PieFooterComponent,
    ListHomeComponent,
    FichaInmuebleComponent,
    CarouselFichaComponent,
    EurosPipe,
    NoImageDirective,
    PreloaderComponent,
    CarouselHomeComponent,
    DetailInmuebleComponent,
    AddTipoComponent,
    ListTipoComponent,
    EditTipoComponent,
    ActivoPipe,
    AddProvinciaComponent,
    ListProvinciaComponent,
    EditProvinciaComponent,
    AddPoblacionComponent,
    ListPoblacionComponent,
    EditPoblacionComponent,
    AddInmuebleComponent,
    ListInmuebleComponent,
    EditInmuebleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
