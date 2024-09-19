import { Component } from '@angular/core';
import { Character } from '../../../dbz/interfaces/character.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent  {

  characters: Character[] = [{
    name: `Diego`,
    power: 1000
  },{
    name: `Juanita`,
    power: 9500
  },{
    name: `Atenis`,
    power: 7500
  }];

  character: Character = {name: '', power: 0};

  caracter = true;

  public counter: number = 10;

  onNewCharacter(character: Character):void {
    console.log(character);

    this.character = character;
  }

  canShowText(caracter: boolean): void {

    this.caracter = caracter;
  }

  increaseBy( value: number ):void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
