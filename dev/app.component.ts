import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
          <ul>
            <li *ngFor="#contact of contactList" (click)="onClick(contact)">
                 {{contact.firstName}} {{contact.lastName}}
            </li>
          </ul>
          <input [(ngModel)]="selectedContact.firstName" type="text">
          <br>
          <div>
            Email: {{selectedContact.email}}
            <br>
            Phone No: {{selectedContact.phoneNo}}
          </div>
    `,
})
export class AppComponent {

  public contactList=[
    {firstName: "Arnab", lastName: "Dibosh", email: "Arnab.dibosh@gmail.com", phoneNo: "01920-485984" },
    {firstName: "Arif", lastName: "Sultan", email: "Arif.sultan@gmail.com", phoneNo: "01920-123345" },
    {firstName: "Yamina", lastName: "Taskin", email: "yamina.taskin@gmail.com", phoneNo: "01920-456789" }
  ];

  public  selectedContact={};
  onClick(clickedItem){
    this.selectedContact=clickedItem;
  }
}
