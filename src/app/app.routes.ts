import { RouterModule, Routes } from '@angular/router';

/**Pages**/
import { AboutComponent } from './components/about/about.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { PortafolioDetalleComponent } from './components/portafolio-detalle/portafolio-detalle.component';


const app_routes: Routes = [
  { path:'home', component:PortafolioComponent },
  { path:'about', component:AboutComponent },
  { path:'Portafolio', component:PortafolioComponent },
  // { path:'Portafolio-detalle', component:PortafolioDetalleComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true});
