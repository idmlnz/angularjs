import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
 
  /**
   * When Angular creates a HeroesComponent, the Dependency Injection system 
   * sets the heroService parameter to the singleton instance of HeroService
   */
  constructor(private heroService: HeroService) { }
 
  ngOnInit() { 
    this.getHeroes();
  }
 
  /*
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  /* 
    subscribe() method gets HEROES; hero.service.getHeroes()
    heroes variable gets this result 
    and get assigned to this.heroes

    subscribe() passes the emitted array to the callback, 
    which sets the component's heroes property
  */
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}