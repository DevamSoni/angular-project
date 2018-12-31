import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  names : any[]=[
    {name:'Devam', phone:'9408403132'},
    {name:'Jahir', phone:'9999999999'},
    {name:'Deep', phone:'8888888888'},
    {name:'Jayesh', phone:'7777777777'}    
  ];
  constructor() { }

  ngOnInit() {
  }

}
