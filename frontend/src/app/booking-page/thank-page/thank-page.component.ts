import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank-page',
  templateUrl: './thank-page.component.html',
  styleUrl: './thank-page.component.css'
})
export class ThankPageComponent implements OnInit {
  constructor(private router: Router){

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
  }
}
