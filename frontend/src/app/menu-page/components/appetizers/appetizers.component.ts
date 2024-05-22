import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrl: './appetizers.component.css'
})
export class AppetizersComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getAppetizers();
  }

}
