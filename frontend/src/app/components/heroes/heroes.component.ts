import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css', '../../../assets/semantic/components/card.css']
})
export class HeroesComponent implements OnInit {

  constructor( protected heroService: HeroService ) {


  }

  ngOnInit() {
    this.heroService.getHeroes()
                  .subscribe( res => {
                    console.log(res);

                  });
  }

}
