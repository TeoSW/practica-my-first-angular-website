import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Clienti } from '../interfaces/clienti/clienti';
import { BookingPageService } from './service/booking-page.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {


  //pt form
  public MyForm: FormGroup;
  form: any;

  //pt animatie
  public button: any;
  public icon: any;
  @ViewChild('buttonRef') buttonRef!: ElementRef;
  @ViewChild('iconRef') iconRef!: ElementRef;

  //validatori pt campuri
  constructor(private clientiService: BookingPageService,
              private formBuilder: FormBuilder,
              private router: Router) 
  {
    this.MyForm = this.formBuilder.group({
      nume_client: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      nr_guests: [null, [Validators.required, Validators.pattern('^(?:[1-9]|10)$')]],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  //animate
  public animate() {
    const button: HTMLElement = this.buttonRef.nativeElement;
    const icon: HTMLElement = this.iconRef.nativeElement;
    button.classList.add("clicked");
    icon.classList.add("done");
  }

  //pt a apasa doar o data pe buton
  disableButton() {
    this.buttonRef.nativeElement.disabled = true;
  }

  //front-end -> back-end -> sql
  addClienti(): void {

    if (this.MyForm.valid) {

      //pt a apasa doar o data
      this.disableButton();

      //pt form
      const newClient: Clienti = {
        nume: this.MyForm.get('nume_client')!.value,
        nrPers: this.MyForm.get('nr_guests')!.value,
        ora: this.MyForm.get('time')!.value
      };

      console.log('New client:', newClient);

      //pt backend
      this.clientiService.addClienti(newClient).subscribe(
        (response: Clienti) => {
          console.log('New client added:', response);
        },
        (error) => {
          console.error('Error adding client:', error);
        }
      );
    }
    else {
      console.log('Form is invalid OR Button was already clicked');
    }
  }
  redirect() {
    setTimeout(() => {
    this.router.navigate(['/thank-you']);
    }, 2300);
    }
}

