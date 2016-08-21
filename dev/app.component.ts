import {Component} from 'angular2/core';
import {ContactListcomponent} from "./contacts/contact.list.component";

@Component({
    selector: 'my-app',
    template: `
    <contact-list></contact-list> `
  ,
  directives: [ContactListcomponent],
})
export class AppComponent {


}
