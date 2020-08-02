import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import {Hero} from '../../model/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css', '../../../assets/semantic/components/card.css']
})
export class HeroesComponent implements OnInit {


  heroes:any = [];
  constructor( protected _heroService: HeroService, private _router:Router ) {}

  ngOnInit() {
    this._heroService.getHeroes()
                  .subscribe( res => {
                    this.heroes = res;
                    console.log(this.heroes);
                  });
  }

  verHeroe( id: String ){
    console.log(id);
    this._router.navigate(['/hero', id])

  }

}
