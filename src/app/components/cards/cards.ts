import { ChangeDetectorRef, Component, input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ApiServices } from '../../utils/services/api-services';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})



export class Cards implements  OnChanges{
  
  constructor(private apiService : ApiServices,private cdr: ChangeDetectorRef){};
  //@Input() index! : number 
  /* private _index!: number;
  @Input()
set index(value: number) {
  if (value !== this._index) {
    this._index = value;
    this.pokemonget(this._index); // ← Appel immédiat dès que l’input change
  }
}
get index(): number {
  return this._index;
} */

  @Input() index!:number;
  id :number = 1;
  name : string = "";
  poids : number = 0;
  src : string = ""
  tailleCm : number = 100;
  type : any[] = [{
    type: {
      name:"string"
    }
  }]; 
  abilityes : any[] = [{ability:{
    name:""
  }}];
  

  pokemonget(id: number):void{
    this.apiService.getPosts(id).subscribe({
      next: data => {
        console.log(data);
        this.src = data.sprites.front_default;
        this.name = data.name;
        this.tailleCm = data.height;
        this.id = data.id;
        this.type = data.types;
        this.abilityes= data.moves;
        this.cdr.detectChanges();
      },
      error: err => console.error("Erreur card.ts" + err )
    })
  }

  
    
  

  /* ngOnInit(): void {
    this.pokemonget(this.index)
  } */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
      if (changes['index']) {
        this.pokemonget(changes['index'].currentValue)
      }
  }
}
