import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private messagesService: MessagesService){}

  ngOnInit(): void {
    this.getHeores();
  }

  heroes: Hero[] = [];
  selectedHero?: Hero;

  getHeores():void{
    this.heroService.getHeroes().subscribe(heroes =>
      this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}
