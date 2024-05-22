import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getDesserts();
  }

}
