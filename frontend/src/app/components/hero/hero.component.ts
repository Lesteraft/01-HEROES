import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../service/hero.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:any = {};

  constructor(
              private _activatedRoute:ActivatedRoute,
              private _heroService: HeroService
            ) {
    this._activatedRoute.params.subscribe(params => {
      this._heroService.getHero(params['id'])
                        .subscribe( response => {
                          this.hero = response['hero'];
                          console.log(this.hero);
                        })
    })
  }

  ngOnInit() {
  }

}
