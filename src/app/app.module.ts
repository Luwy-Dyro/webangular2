import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//HTTP - Servicios
import { HttpModule } from "@angular/http";

//Rutas
import { app_routing } from './app.routes';

//Servicios
import { InfoService } from './services/info.service';

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PortafolioDetalleComponent } from './components/portafolio-detalle/portafolio-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    PortafolioComponent,
    FooterComponent,
    AboutComponent,
    PortafolioDetalleComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule

  ],
  providers: [
    InfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
