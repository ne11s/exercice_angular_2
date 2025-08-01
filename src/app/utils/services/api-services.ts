import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {
  private baseUrl = "https://pokeapi.co/api/v2/pokemon/"
  constructor(private http: HttpClient){}

  getPosts(id : number): Observable<any>{
    return this.http.get(this.baseUrl + id)
  }
  info = {
    abilities: [
      { ability: [Object], is_hidden: false, slot: 1 },
      { ability: [Object], is_hidden: true, slot: 3 }
    ],
    base_experience: 64,
    cries: {
      latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg',
      legacy: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/1.ogg'
    },
    forms: [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
      }
    ],
    game_indices: [
      { game_index: 153, version: [Object] },
      { game_index: 153, version: [Object] },
      { game_index: 153, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] },
      { game_index: 1, version: [Object] }
    ],
    height: 7,
    held_items: [],
    id: 1,
    is_default: true,
    location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',      
    moves: [
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] },
      { move: [Object], version_group_details: [Array] }
    ],
    name: 'bulbasaur',
    order: 1,
    past_abilities: [ { abilities: [Array], generation: [Object] } ],
    past_types: [],
    species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
    },
    sprites: {
      back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
      back_female: null,
      back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
      back_shiny_female: null,
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      front_female: null,
      front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
      front_shiny_female: null,
      other: {
        dream_world: [Object],
        home: [Object],
        'official-artwork': [Object],
        showdown: [Object]
      },
      versions: {
        'generation-i': [Object],
        'generation-ii': [Object],
        'generation-iii': [Object],
        'generation-iv': [Object],
        'generation-v': [Object],
        'generation-vi': [Object],
        'generation-vii': [Object],
        'generation-viii': [Object]
      }
    },
    stats: [
      { base_stat: 45, effort: 0, stat: [Object] },
      { base_stat: 49, effort: 0, stat: [Object] },
      { base_stat: 49, effort: 0, stat: [Object] },
      { base_stat: 65, effort: 1, stat: [Object] },
      { base_stat: 65, effort: 0, stat: [Object] },
      { base_stat: 45, effort: 0, stat: [Object] }
    ],
    types: [ { slot: 1, type: [Object] }, { slot: 2, type: [Object] } ],
    weight: 69
  }
}
