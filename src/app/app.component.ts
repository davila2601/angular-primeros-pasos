import { Component } from '@angular/core';
import { Character } from './dbz/interfaces/character.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public title: string = 'Hola Mundo';

  characters: Character[] = [{
    name: `Ragnar`,
    power: 10000
  },{
    name: `Moscorrof`,
    power: 95
  },];

}
