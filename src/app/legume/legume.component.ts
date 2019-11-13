import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

@Input() img:string;
@Input() nom :string;
@Input() prix:number; 
@Input() frais:boolean;
actif = true;
  constructor() { }

  ngOnInit() {
  }

}
