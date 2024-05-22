import { Component } from '@angular/core';
import { MainBodyService } from './service/main-body.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {
  public mainComponents;

  constructor (service: MainBodyService) {
    this.mainComponents = service.getMainBodyVector();
  }

}
