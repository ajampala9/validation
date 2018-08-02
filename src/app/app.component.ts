import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string;
  error: boolean=false;

  onlogin() {

console.log(this.username);
console.log(this.password);


if(this.password=="phani"){
  //this.error ==true;
  //<p *ngIf=error>logged sucessfully</p>
  console.log("successfully logged")
}
  }


}
