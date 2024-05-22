import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrl: './meat.component.css'
})
export class MeatComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getMeat();
  }

}
