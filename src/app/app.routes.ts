import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

const APP_ROUTES: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'heroes', component:HeroesComponent},
  { path: 'about', component:AboutComponent},
  { path: 'heroe/:id', component:HeroeComponent},
  { path: 'buscarHeroe/:termino', component:BuscarHeroeComponent},
  { path: '**',   pathMatch: 'full', redirectTo:'home'}    
];

  export const app_routing = RouterModule.forRoot(APP_ROUTES);