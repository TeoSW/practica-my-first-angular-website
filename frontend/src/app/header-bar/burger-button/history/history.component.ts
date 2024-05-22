import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  history = `
  Crimson Ember was established in 1995 by master chef Kenji Nakamura, who envisioned bringing the
  authentic taste of Japanese cuisine to the heart of Sushi City. Over the years, Crimson Ember has
  become a beloved dining destination, known for its commitment to quality and tradition. The restaurant
  started as a small sushi bar and has since grown into a full-fledged dining experience, offering a wide
  range of Japanese dishes, from sushi and sashimi to tempura and ramen. Despite its growth, Crimson Ember
  has remained true to its roots, focusing on the freshest ingredients and the meticulous preparation
  techniques that have been passed down through generations. Today, it continues to be a symbol of culinary
  excellence and cultural heritage, attracting both locals and visitors from around the world.
`;
}
