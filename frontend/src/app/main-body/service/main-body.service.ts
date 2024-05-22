import { Injectable } from '@angular/core';
import { MainBody } from '../../interfaces/main-body';
import { NONE_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MainBodyService {
  vectorMainBody : MainBody[]=[
      {
        image: "../assets/mainMap.png",
        header: "Adress",
        link: "https://www.google.com/maps/place/Bulevardul+Constantin+Br%C3%A2ncoveanu+44,+Bucure%C8%99ti/@44.3896967,26.1098095,17z/data=!3m1!4b1!4m5!3m4!1s0x40b1fe4710060ca5:0x782b32ec404580e0!8m2!3d44.3896967!4d26.1098095?entry=ttu",
        description: `
        Bd. Constantin Brancoveanu 44,<br>
        Bucharest,<br>
        Sector 4,<br>
        Romania<br>
        `
      },
      {
        image: "../assets/mainClock.png",
        header: "Opening Hours",
        link: "https://time.is/Bucharest",
        description: `
        Timezone: (GMT+3) <br>
        Lunch: 12–3pm <br>
        Dinner: 7:00 – 12:00pm <br>
        `
      },
      {
        image: "../assets/mainEmail.png",
        header: "E-mail",
        link: "https://mail.google.com/mail",
        description:`
        crimson.restaurant@gmail.com
        `
      },
      {
        image: "../assets/mainPhone.png",
        header: "Phone",
        link: "tel:+40712345678",
        description:`
        +40712345678
        `
      }
  ]

  getMainBodyVector(){
    return this.vectorMainBody;
  }

  constructor() { }
}
