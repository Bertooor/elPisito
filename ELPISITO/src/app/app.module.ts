import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
