import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  //selectedHero: Hero; - no longer needed with routes enabled
 
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

  /**  No longer needed with routes enabled
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


}