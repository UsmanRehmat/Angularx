import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes/Hero';
import {HEROES} from '../mock-heroes'
import { HeroService } from 'src/app/hero.service';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  constructor(private heroService: HeroService) { 
  }

  ngOnInit() {
     this.getHeroes();
  }

  private selectedHero: Hero;
  
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero={
    id:1,
    name:'Usman'
  };

  private heroes: Hero[]; 
  public getHeroes():void
  {
    
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes); 
  }
}
