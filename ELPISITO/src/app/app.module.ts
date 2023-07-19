import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
