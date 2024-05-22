import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrl: './drinks.component.css'
})
export class DrinksComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getDrinks();
  }

}
