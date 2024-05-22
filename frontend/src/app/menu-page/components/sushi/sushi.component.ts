import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-sushi',
  templateUrl: './sushi.component.html',
  styleUrl: './sushi.component.css'
})
export class SushiComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getSushi();
  }

}
