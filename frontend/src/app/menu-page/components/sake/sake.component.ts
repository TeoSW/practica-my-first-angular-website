import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-sake',
  templateUrl: './sake.component.html',
  styleUrl: './sake.component.css'
})
export class SakeComponent {
  public components;

  constructor (service: MenuService) {
    this.components = service.getSake();
  }

}
