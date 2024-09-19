import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

console.log(uuid());


import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  constructor() { }

  characters: Character[] = [{
    id: uuid(),
    name: `Krilin`,
    power: 1000
  },{
    id: uuid(),
    name: `Goku`,
    power: 9500
  },{
    id: uuid(),
    name: `Vegueta`,
    power: 7500
  }];

  addCharacter(character: Character):void {

    const newCharacter:Character = {id: uuid(), ... character};

    this.characters.push(newCharacter);
  }

  // deleteCharacter(index: number): void {
  //   this.characters.splice(index,1);
  //   console.log('Main Page');
  //   console.log(index);

  // }

  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character => character.id !== id);
  }

}

