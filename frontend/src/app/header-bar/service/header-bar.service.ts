import { Injectable } from '@angular/core';
import { VectorSocialMedia } from '../../interfaces/social-media';
@Injectable({
  providedIn: 'root'
})

export class HeaderBarService {

socialMediaList : VectorSocialMedia[] = [
  {
    image: "../assets/instaLogo.png",
    name: "instagram",
    link: "https://www.instagram.com/",
    id: "instaLogo",
  },
  {
    image: "../assets/facebookLogo.png",
    name: "facebook",
    link: "https://www.facebook.com",
    id: "facebookLogo",
  },
  {
    image: "../assets/ytLogo.png",
    name: "youtube",
    link: "https://www.youtube.com",
    id: "ytLogo",
  },
  {
    image: "../assets/xLogo.png",
    name: "x",
    link: "https://www.x.com",
    id: "xLogo",
  },
]
  constructor() { }

    getHeaderBarComponents(){
      return this.socialMediaList
    }
}
