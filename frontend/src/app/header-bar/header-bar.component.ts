import { Component } from '@angular/core';
import { HeaderBarService } from './service/header-bar.service';

@Component({

  selector: 'app-header-bar', 
  styleUrl: './header-bar.component.css',
  templateUrl: 'header-bar.component.html',
})
export class HeaderBarComponent {

    public headerComponents;

    constructor (service: HeaderBarService) {
      this.headerComponents = service.getHeaderBarComponents();
    }

}
