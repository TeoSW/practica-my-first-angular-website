import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  description = `
  Welcome to Sakura Japanese Restaurant, where culinary tradition meets contemporary flair.
  Located in the heart of Sushi City, Sakura offers a serene dining experience with an authentic
  Japanese ambiance. Our menu features a diverse selection of sushi, sashimi, tempura, and
  other classic dishes, meticulously crafted using the freshest ingredients. Whether you're
  joining us for a quick lunch or a special dinner, our commitment to quality and service
  ensures a memorable dining experience. Come and savor the flavors of Japan at Sakura.
`;
}
