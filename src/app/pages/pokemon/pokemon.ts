import { Component } from '@angular/core';
import { Cards } from "../../components/cards/cards";
import { Button } from "../../components/button/button";

@Component({
  selector: 'app-pokemon',
  imports: [Cards, Button],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class Pokemon {
  index : number = 1;
  handleData(data:number):void {
    this.index = data
  };
  
  
}
