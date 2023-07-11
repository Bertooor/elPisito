import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CabeceraFooterComponent } from './components/cabecera-footer/cabecera-footer.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { PieFooterComponent } from './components/pie-footer/pie-footer.component';

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
    PieFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
