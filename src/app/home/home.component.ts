import { Component, OnInit } from '@angular/core';
import {RnmapiService} from "../services/rnmapi.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	title:string = 'Rick and Morty Practice App! Wubba lubba dub-dub!';
	characters = [];
	rickImage = '';
	mortyImage = '';

  constructor(private rnmService:RnmapiService) { }

  ngOnInit() {
  	this.rnmService.getCharacters().subscribe(info => {
  		this.characters = info.json().results;
  		this.getImages();
  	});
  }

  getImages(){
  	for(let char of this.characters){
  		if(char.name === "Morty Smith"){
  			this.mortyImage = char.image;
  		} else if(char.name === "Rick Sanchez"){
  			this.rickImage = char.image;
  		}
  	}
  }
}
