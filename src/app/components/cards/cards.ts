import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ApiServices } from '../../utils/services/api-services';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})



export class Cards implements OnInit, OnDestroy , OnChanges{
  
  @Input() index! : number 
  name : string = "";
  poids : number = 0;
  tailleCm : number = 100;
  type : string[] = ["normal"];
  ability : string[] = ["vive attaque","queue de fer","vol"];
  constructor(private apiService : ApiServices){};
  

  pokemonget(id: number):void{
    this.apiService.getPosts(id).subscribe({
      next: data => {
        console.log(data);
        this.name = data.name;
        this.tailleCm = data.height;
      },
      error: err => console.error("Erreur card.ts" + err )
    })
  }
  
  
    
  

  ngOnInit(): void {
    this.pokemonget(this.index)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("test");
      if (changes['index']) {
        console.log("test dans le if");
        
        this.pokemonget(this.index)
      }
  }
  ngOnDestroy(): void {
    console.log("On destroy");
  }
}
