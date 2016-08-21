import {Component} from 'angular2/core';

@Component({
  selector: 'contact',
  template: `
          <input [(ngModel)]="contact.firstName" type="text">
          <br>
          <div>
            Email: {{contact.email}}
            <br>
            Phone No: {{contact.phoneNo}}
          </div>
    `,
  inputs: ["contact"]
})
export class ContactComponent{
  public contact={};
}
