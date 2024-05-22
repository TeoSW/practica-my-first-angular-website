import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-ramen',
  templateUrl: './ramen.component.html',
  styleUrl: './ramen.component.css'
})
export class RamenComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getRamen();
  }

}
