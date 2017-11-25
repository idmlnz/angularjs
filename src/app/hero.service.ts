import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }
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
    return of(HEROES);
  }

}