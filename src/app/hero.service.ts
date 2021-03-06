import { Injectable } from '@angular/core';
import {Hero} from './heroes/Hero';
import {HEROES} from './mock-heroes';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { MessageService } from 'src/app/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  public getHeroes() : Observable<Hero[]>{
    this.messageService.add("fetching heroes from hero service.");
    return of(HEROES);
  }
  public getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    
    return of(HEROES.find(hero => hero.id === id));
  }
}
