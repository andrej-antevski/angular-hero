import { Hero } from './Hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  herop:Hero;

  selectedHero(h:Hero){
    this.herop = h;
  }
}
