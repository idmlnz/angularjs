import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

/**
 * injected in:
 *   HeroesComponent
 *   MessagesComponent
 */
@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  /*
  getHeroes(): Hero[] {
      return HEROES;
  }
  */

  /*
  * Observable to emit the array of heroes— which 
  * could happen now or several minutes from now
  */
  getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}