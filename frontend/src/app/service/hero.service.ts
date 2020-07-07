import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hero } from '../model/hero';
// import {HeroesComponent} from "../components/heroes/heroes.component";
import { AddHeroComponent } from "../components/add-hero/add-hero.component";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  selectedHero: Hero;


  readonly URL_API = 'http://localhost:3000/api/heroes'
  heroes: Hero[];


  constructor( private http:HttpClient) {
    this.selectedHero = new Hero();
    // this.selectedHero.nombre = 'Logan';
    // this.selectedHero.aparicion = '1996-06-12';
    // this.selectedHero.bio = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    // this.selectedHero.casa = 'Marvel';
  }

  getHeroes()  {
    return this.http.get(this.URL_API);
  }

  createHero(hero: any){
    return this.http.post(this.URL_API + '/create', hero);
  }

  putHero(hero: Hero){
    return this.http.put(this.URL_API + '/edit/' + `${hero._id}`, hero);
  }

  deleteHero(_id: string){
    return this.http.delete(this.URL_API + '/delete' + `${_id}`)
  }

}
