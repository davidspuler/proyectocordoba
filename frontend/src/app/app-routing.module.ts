import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValleDeTraslasierrasComponent } from './vistas/valle-de-traslasierras/valle-de-traslasierras.component';
import { ValleDePunillaComponent } from './vistas/valle-de-punilla/valle-de-punilla.component';
import { HomeComponent } from './vistas/home/home.component';
import { ValleDeCalamuchitaComponent } from './vistas/valle-de-calamuchita/valle-de-calamuchita.component';
import { ValleDeParavachascaComponent } from './vistas/valle-de-paravachasca/valle-de-paravachasca.component';
import { NorteYNoroesteComponent } from './vistas/norte-y-noroeste/norte-y-noroeste.component';
import { SierrasChicasComponent } from './vistas/sierras-chicas/sierras-chicas.component';
import { CordobaCapitalComponent } from './vistas/cordoba-capital/cordoba-capital.component';
import { ParquesNacionalesComponent } from './vistas/parques-nacionales/parques-nacionales.component';
import { AstroturismoComponent } from './vistas/astroturismo/astroturismo.component';
import { TurismoAventuraComponent } from './vistas/turismo-aventura/turismo-aventura.component';
import { TurismoReligiosoComponent } from './vistas/turismo-religioso/turismo-religioso.component';
import { CaminoDelVinoComponent } from './vistas/camino-del-vino/camino-del-vino.component';
import { Pagina404Component } from './vistas/pagina404/pagina404.component';
import { SobreNosotrosComponent } from './vistas/sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactoComponent } from './vistas/contacto/contacto.component';
import { PaquetesTuristicosComponent} from './vistas/paquetes-turisticos/paquetes-turisticos.component';
import { PaqueteTuristicoLaCumbrecitaComponent } from './shop/paquete-turistico-la-cumbrecita/paquete-turistico-la-cumbrecita.component';
import { PaqueteTuristicoCbaComponent } from './shop/paquete-turistico-cba/paquete-turistico-cba.component';
import { PaqueteTuristicoCpazComponent } from './shop/paquete-turistico-cpaz/paquete-turistico-cpaz.component';
import { PaqueteTuristicoTraslasierraComponent } from './shop/paquete-turistico-traslasierra/paquete-turistico-traslasierra.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { CarritoComponent } from './vistas/carrito/carrito.component';

const routes: Routes = [
  //La siguiente linea funciona como index.html, sera la vista que cargara por defecto al entrar a la página
  {path: '', redirectTo: '/home', pathMatch: 'full'},


  {path: 'home', component:HomeComponent},
  {path: 'sobre-nosotros', component:SobreNosotrosComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},
  {path: 'contacto', component:ContactoComponent},


  //Rutas de las areas turisticas
  {path: 'valle-de-traslasierra', component:ValleDeTraslasierrasComponent},
  {path: 'valle-de-punilla', component:ValleDePunillaComponent},
  {path: 'valle-de-calamuchita', component:ValleDeCalamuchitaComponent},
  {path: 'valle-de-paravachasca', component:ValleDeParavachascaComponent},
  {path: 'norte-y-noreste', component:NorteYNoroesteComponent},
  {path: 'sierras-chicas', component:SierrasChicasComponent},
  {path: 'cordoba-capital', component:CordobaCapitalComponent},
  
  //Rutas de las actividades turisticas
  {path: 'parques-nacionales', component:ParquesNacionalesComponent},
  {path: 'astroturismo', component:AstroturismoComponent},
  {path: 'turismo-aventura', component:TurismoAventuraComponent},
  {path: 'turismo-religioso', component:TurismoReligiosoComponent},
  {path: 'camino-del-vino', component:CaminoDelVinoComponent},

    // paquetes turisticos

  {path: 'paquete-turisticos', component: PaquetesTuristicosComponent},
  {path: 'paquete-turistico-la-cumbrecita', component: PaqueteTuristicoLaCumbrecitaComponent},
  {path: 'paquete-turistico-cba', component: PaqueteTuristicoCbaComponent},
  {path: 'paquete-turistico-cpaz', component: PaqueteTuristicoCpazComponent},
  {path: 'paquete-turistico-traslasierra', component: PaqueteTuristicoTraslasierraComponent},
  { path: 'carrito', component: CarritoComponent },

  //vista 404 en caso de que la pagina solicitada no exista
  {path: '**', component:Pagina404Component},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
