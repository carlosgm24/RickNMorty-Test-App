import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class RnmapiService {
	API_ENDPOINT = "https://rickandmortyapi.com/api";

  	constructor(private http: Http) { }

  	public getCharacters(){
  		return this.http.get(this.API_ENDPOINT+'/character');
  	};

  	public getCharacter(id){
  		return this.http.get(this.API_ENDPOINT+'/character/'+id);
  	};
}
