import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-vegan',
  templateUrl: './vegan.component.html',
  styleUrl: './vegan.component.css'
})
export class VeganComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getVegan();
  }

}
