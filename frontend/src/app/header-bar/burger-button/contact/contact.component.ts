import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactInfo = {
    address: 'Bd. Constantin Brancoveanu 44,Bucharest, Sector 4, Romania',
    phone: '+40712345678',
    email: 'crimson.restaurant@gmail.com'
  };

  onSubmit() {
    alert('Your message has been sent!');
  }
}
