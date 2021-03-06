import { RouterModule, Routes } from '@angular/router';
import {HomeComponent}  from "./components/home/home.component";
import {AboutComponent}  from "./components/about/about.component";
import { HeroesComponent }  from "./components/heroes/heroes.component";
import { AddHeroComponent }  from "./components/add-hero/add-hero.component";
import { HeroComponent } from './components/hero/hero.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'add-hero', component: AddHeroComponent },
  { path: 'hero/:id', component: HeroComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
