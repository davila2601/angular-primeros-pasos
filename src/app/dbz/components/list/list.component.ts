import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() characterlist: Character[] = [{
    name: `Trunks`,
    power: 10
  }];

  // OnDelete = Index value : number (debo emitirlo aqui)

  @Output() onDeleteCharacter: EventEmitter<string> = new EventEmitter();


  deleteCharacter(id?:string): void{

    if(!id) return;

    this.onDeleteCharacter.emit(id);

  }

}

// @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
// @Output() canShowText: EventEmitter<boolean> = new EventEmitter();


// emitCharacter(fgfdg: Character, position:number):void {
//   this.onNewCharacter.emit(fgfdg);
  // const canShowText = position % 2 === 0;
  // this.canShowText.emit(canShowText);
  // console.log(canShowText);
// }


