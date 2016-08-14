import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
          <h3 (click)="onClick()">{{contact.firstName }} {{contact.lastName}}</h3>
          <input [(ngModel)]="contact.firstName" type="text">
          <div>
            Email: <span *ngIf="showDetail === true"> {{contact.email}}</span>
            <br>
            Phone No: <span *ngIf="showDetail === true"> {{contact.phoneNo}}</span>
          </div>
    `,
})
export class AppComponent {


  public showDetail=false;
  public contact={
    firstName: "Arnab",
    lastName: "Dibosh",
    email: "Arnab.dibosh@gmail.com",
    phoneNo: "01920-485984"
  };

  onClick(){
    this.showDetail=true;
  }
}
