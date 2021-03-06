import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }


  getHeroes():Observable< Hero[]> {
    //this.messageService.add("Here will be shown heroes in order they are selected")
    return of(HEROES);
  }


}
