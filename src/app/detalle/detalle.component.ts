import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RnmapiService} from "../services/rnmapi.service";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
	id = null;
	character = {};

  constructor(private route: ActivatedRoute, private rnmService:RnmapiService) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];
  	this.character = this.rnmService.getCharacter(this.id).subscribe( info => {
  		this.character = info.json();
  	});

  }

}
