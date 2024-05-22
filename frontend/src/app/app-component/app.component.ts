import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private titleService:Title,
              private router:Router,
              private route:ActivatedRoute,
              @Inject(PLATFORM_ID) private platformId: Object
  ) {
    //titlu
    this.titleService.setTitle("Crimson Ember");
  }

  //router pt menu page / burger components
  isMenuRoute: boolean = false
  isBurgerRoute: boolean = false
  ngOnInit() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isMenuRoute = this.router.url.startsWith('/menu');
    });

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe(() => {
      this.isBurgerRoute = this.router.url.startsWith('/nav');
    });

    //top screen
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });

    }
  }
}