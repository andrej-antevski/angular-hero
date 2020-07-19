import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { HEROES } from './../mock-heroes';
import { Hero } from './../Hero';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';  

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  @Output() emitter: EventEmitter<Hero> = new EventEmitter<Hero>();
  
  ngOnInit(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);  }

  onSelect(hero:Hero){
    this.emitter.emit(hero);
    this.messageService.add(hero.name);
  }

}
