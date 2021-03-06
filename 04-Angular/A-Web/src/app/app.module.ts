import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EstiloComponent } from './estilo/estilo.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PlanetaStarWarsComponent } from './Componentes/planeta-star-wars/planeta-star-wars.component';
import { ClimateComponent } from './Componentes/planeta-star-wars/Componentes PSW/climate/climate.component';
import { DiameterComponent } from './Componentes/planeta-star-wars/Componentes PSW/diameter/diameter.component';
import { GravityComponent } from './Componentes/planeta-star-wars/Componentes PSW/gravity/gravity.component';
import { OrbitalPeriodComponent } from './Componentes/planeta-star-wars/Componentes PSW/orbital-period/orbital-period.component';
import { TerrainComponent } from './Componentes/planeta-star-wars/Componentes PSW/terrain/terrain.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { Pagina2Component } from './Componentes/pagina2/pagina2.component';
import {ModuleDeRutas} from "./routes";
import { Pagina21Component } from './Componentes/pagina21/pagina21.component';
import { Pagina22Component } from './Componentes/pagina22/pagina22.component';
import { Pagina23Component } from './Componentes/pagina23/pagina23.component';
import { LoginComponent } from './Componentes/login/login.component';
import {TokenService} from "./token.service";
import {UsuarioServiceService} from "./Services/usuario-service.service";
import {MasterUrlService} from "./Services/master-url.service";
import {AuthService} from "./Services/auth.service";
import {EstaLogeadoService} from "./Services/esta-logeado.service";
import {ApiAuthService} from "./Services/api-auth.service";

@NgModule({
  declarations: [
    AppComponent,
    EstiloComponent,
    InicioComponent,
    PlanetaStarWarsComponent,

    ClimateComponent,
    DiameterComponent,
    GravityComponent,
    OrbitalPeriodComponent,
    TerrainComponent,
    UsuarioComponent,
    Pagina2Component,
    Pagina21Component,
    Pagina22Component,
    Pagina23Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuleDeRutas
  ],
  // providers: [],
  providers: [
        // http
        TokenService,// aqui van los servicios - singletons
        UsuarioServiceService,  // servicios - singletons
        MasterUrlService,
    AuthService,
    EstaLogeadoService,
    ApiAuthService

  ],
  //bootstrap: [AppComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
