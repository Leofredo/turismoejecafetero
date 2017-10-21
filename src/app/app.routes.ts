import {
  AboutComponent,
  PortafolioComponent,
  ContactoComponent,
  AddmzlComponent,
  AddperComponent,
  AddarmComponent,
  IndexmzlComponent
} from './components/index.paginas';
import { RouterModule, Routes } from '@angular/router';


const app_routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'addmzl', component: AddmzlComponent },
  { path: 'addper', component: AddperComponent },
  { path: 'addarm', component: AddarmComponent },
  { path: 'indexmzl', component: IndexmzlComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'portafolio' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
