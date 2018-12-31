import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding in Angular via Github';
  btnText : string = "Submit";
  isDisable : boolean = false;
  tableClass:string ='text-center' ;

  btnClick(){
    setTimeout(() => {
      this.isDisable = true;
      console.log("Freeze after 2 second")
    },1000);
  }
  
}
