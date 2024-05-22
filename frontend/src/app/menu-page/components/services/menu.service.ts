import { Injectable } from '@angular/core';
import { Menu } from '../../../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
    vectorAppetizers : Menu[]=[
      {
        name: 'Miso Soup',
        image: '../assets/miso.jpg',
        ingredients: 'Dashi soup, Miso sauce, wakame, tofu, green onion',
        kcal: '200',
        price: '5'
      },
      {
        name: 'Edamame',
        image: '../assets/edamame.jpg',
        ingredients: 'Steamed soybeans, sea salt',
        kcal: '120',
        price: '4'
      },
      {
        name: 'Gyoza',
        image: '../assets/gyoza.jpg',
        ingredients: 'Ground pork, garlic, ginger, cabbage, soy sauce',
        kcal: '200',
        price: '6'
      },
      {
        name: 'Takoyaki',
        image: '../assets/takoyaki.jpg',
        ingredients: 'Octopus, flour, dashi, green onion, pickled ginger, takoyaki sauce',
        kcal: '250',
        price: '7'
      },
      {
        name: 'Agedashi Tofu',
        image: '../assets/agedashi_tofu.jpg',
        ingredients: 'Firm tofu, dashi, soy sauce, mirin, cornstarch, green onion, grated daikon radish',
        kcal: '180',
        price: '6'
      },
      {
        name: 'Tempura',
        image: '../assets/tempura.jpg',
        ingredients: 'Shrimp, vegetables (e.g., sweet potato, zucchini), tempura batter, soy sauce, tentsuyu dipping sauce',
        kcal: '300',
        price: '8'
      },
      {
        name: 'Yakitori',
        image: '../assets/yakitori.jpg',
        ingredients: 'Skewered chicken (thigh or breast), soy sauce, mirin, sake, sugar',
        kcal: '150',
        price: '6'
      },
      {
        name: 'Agedashi Eggplant',
        image: '../assets/agedashi_eggplant.jpg',
        ingredients: 'Japanese eggplant, dashi, soy sauce, mirin, cornstarch, green onion, grated daikon radish',
        kcal: '160',
        price: '5'
      }
      
    ]

    vectorSushi: Menu[] = [
      {
        name: 'Salmon Nigiri',
        image: '../assets/salmon_nigiri.jpg',
        ingredients: 'Sushi rice, fresh salmon',
        kcal: '180',
        price: '8'
      },
      {
        name: 'Tuna Maki',
        image: '../assets/tuna_maki.jpg',
        ingredients: 'Sushi rice, tuna, nori, cucumber',
        kcal: '220',
        price: '10'
      },
      {
        name: 'California Roll',
        image: '../assets/california_roll.jpg',
        ingredients: 'Crab meat, avocado, cucumber, nori, sushi rice',
        kcal: '280',
        price: '12'
      },
      {
        name: 'Dragon Roll',
        image: '../assets/dragon_roll.jpg',
        ingredients: 'Shrimp tempura, cucumber, avocado, eel, eel sauce, nori, sushi rice',
        kcal: '350',
        price: '15'
      },
      {
        name: 'Spicy Tuna Roll',
        image: '../assets/spicy_tuna_roll.jpg',
        ingredients: 'Tuna, spicy mayo, cucumber, nori, sushi rice, sesame seeds',
        kcal: '300',
        price: '13'
      },
      {
        name: 'Rainbow Roll',
        image: '../assets/rainbow_roll.jpg',
        ingredients: 'Crab meat, avocado, cucumber, various fish (e.g., salmon, tuna, yellowtail), nori, sushi rice',
        kcal: '320',
        price: '14'
      },
      {
        name: 'Caterpillar Roll',
        image: '../assets/caterpillar_roll.jpg',
        ingredients: 'Eel, cucumber, avocado, eel sauce, nori, sushi rice',
        kcal: '380',
        price: '16'
      },
      {
        name: 'Spider Roll',
        image: '../assets/spider_roll.jpg',
        ingredients: 'Soft shell crab tempura, avocado, cucumber, spicy mayo, nori, sushi rice',
        kcal: '370',
        price: '15'
      }
    ]

    vectorRamen: Menu[] = [
      {
        name: 'Shoyu Ramen',
        image: '../assets/shoyu_ramen.jpg',
        ingredients: 'Wheat noodles, chicken or pork broth, soy sauce, chashu pork, green onions, nori, boiled egg',
        kcal: '480',
        price: '13'
      },
      {
        name: 'Tonkotsu Ramen',
        image: '../assets/tonkotsu_ramen.jpg',
        ingredients: 'Wheat noodles, pork bone broth, chashu pork, black garlic oil, green onions, wood ear mushrooms',
        kcal: '550',
        price: '14'
      },
      {
        name: 'Miso Ramen',
        image: '../assets/miso_ramen.jpg',
        ingredients: 'Wheat noodles, miso broth, chashu pork, bean sprouts, corn, green onions, sesame seeds',
        kcal: '520',
        price: '14'
      },
      {
        name: 'Shio Ramen',
        image: '../assets/shio_ramen.jpg',
        ingredients: 'Wheat noodles, clear broth, sea salt, chashu pork, bamboo shoots, spinach, nori',
        kcal: '490',
        price: '13'
      },
      {
        name: 'Spicy Ramen',
        image: '../assets/spicy_ramen.jpg',
        ingredients: 'Wheat noodles, spicy broth, ground pork, bean sprouts, cabbage, chili oil, green onions',
        kcal: '530',
        price: '15'
      },
      {
        name: 'Vegetable Ramen',
        image: '../assets/vegetable_ramen.jpg',
        ingredients: 'Wheat noodles, vegetable broth, tofu, assorted vegetables (carrots, broccoli, mushrooms), nori',
        kcal: '450',
        price: '12'
      },
      {
        name: 'Chicken Ramen',
        image: '../assets/chicken_ramen.jpg',
        ingredients: 'Wheat noodles, chicken broth, grilled chicken, bok choy, corn, green onions',
        kcal: '480',
        price: '13'
      },
      {
        name: 'Seafood Ramen',
        image: '../assets/seafood_ramen.jpg',
        ingredients: 'Wheat noodles, seafood broth, shrimp, scallops, squid, fish cake, spinach, nori',
        kcal: '550',
        price: '16'
      }
    ];
  
    vectorMeat: Menu[] = [
      {
        name: 'Teriyaki Chicken',
        image: '../assets/teriyaki_chicken.jpg',
        ingredients: 'Chicken thighs, soy sauce, mirin, sake, sugar, ginger, garlic',
        kcal: '320',
        price: '14'
      },
      {
        name: 'Beef Yakitori',
        image: '../assets/beef_yakitori.jpg',
        ingredients: 'Beef sirloin, soy sauce, mirin, sake, sugar, green onions',
        kcal: '280',
        price: '15'
      },
      {
        name: 'Pork Katsu',
        image: '../assets/pork_katsu.jpg',
        ingredients: 'Pork loin, flour, egg, panko breadcrumbs, cabbage, tonkatsu sauce',
        kcal: '380',
        price: '16'
      },
      {
        name: 'Ginger Pork Stir-fry',
        image: '../assets/ginger_pork_stir_fry.jpg',
        ingredients: 'Pork tenderloin, ginger, garlic, soy sauce, sake, sugar, vegetables (bell peppers, onions, carrots)',
        kcal: '350',
        price: '15'
      },
      {
        name: 'Sukiyaki Beef',
        image: '../assets/sukiyaki_beef.jpg',
        ingredients: 'Beef slices, shirataki noodles, tofu, napa cabbage, mushrooms, soy sauce, mirin, sugar, sake',
        kcal: '400',
        price: '18'
      },
      {
        name: 'Chicken Karaage',
        image: '../assets/chicken_karaage.jpg',
        ingredients: 'Chicken thighs, soy sauce, sake, ginger, garlic, potato starch',
        kcal: '320',
        price: '14'
      },
      {
        name: 'Beef Curry',
        image: '../assets/beef_curry.jpg',
        ingredients: 'Beef cubes, onions, carrots, potatoes, curry roux, rice',
        kcal: '450',
        price: '17'
      },
      {
        name: 'Grilled Miso Black Cod',
        image: '../assets/miso_black_cod.jpg',
        ingredients: 'Black cod fillets, white miso paste, mirin, sake, sugar',
        kcal: '380',
        price: '18'
      }
  ];

    vectorVegan: Menu[] = [
    {
      name: 'Vegetable Tempura',
      image: '../assets/vegetable_tempura.jpg',
      ingredients: 'Assorted vegetables, tempura batter, tentsuyu dipping sauce',
      kcal: '250',
      price: '12'
    },
    {
      name: 'Avocado Roll',
      image: '../assets/avocado_roll.jpg',
      ingredients: 'Avocado, cucumber, nori, sushi rice',
      kcal: '220',
      price: '10'
    },
    {
      name: 'Vegetable Sushi Bowl',
      image: '../assets/vegetable_sushi_bowl.jpg',
      ingredients: 'Sushi rice, assorted vegetables, nori strips, sesame seeds',
      kcal: '280',
      price: '13'
    },
    {
      name: 'Tofu Teriyaki',
      image: '../assets/tofu_teriyaki.jpg',
      ingredients: 'Firm tofu, soy sauce, mirin, sake, sugar, ginger, garlic',
      kcal: '290',
      price: '13'
    },
    {
      name: 'Vegetable Gyoza',
      image: '../assets/vegetable_gyoza.jpg',
      ingredients: 'Mixed vegetables (e.g., cabbage, carrots, mushrooms), garlic, ginger, soy sauce',
      kcal: '200',
      price: '11'
    },
    {
      name: 'Soba Noodle Salad',
      image: '../assets/soba_noodle_salad.jpg',
      ingredients: 'Soba noodles, mixed greens, cucumber, carrot, sesame seeds, soy sauce, rice vinegar, sesame oil',
      kcal: '240',
      price: '12'
    },
    {
      name: 'Sweet Potato Sushi Roll',
      image: '../assets/sweet_potato_sushi_roll.jpg',
      ingredients: 'Roasted sweet potato, avocado, nori, sushi rice, sesame seeds',
      kcal: '260',
      price: '11'
    },
    {
      name: 'Vegetable Ramen',
      image: '../assets/vegetable_ramen.jpg',
      ingredients: 'Wheat noodles, vegetable broth, tofu, assorted vegetables (carrots, broccoli, mushrooms), nori',
      kcal: '450',
      price: '12'
    }
  ];

  vectorDrinks: Menu[] = [
    {
      name: 'Green Tea',
      image: '../assets/green_tea.jpg',
      ingredients: 'Green tea leaves, hot water',
      kcal: '0',
      price: '3'
    },
    {
      name: 'Matcha Latte',
      image: '../assets/matcha_latte.jpg',
      ingredients: 'Matcha powder, milk, hot water, sweetener (optional)',
      kcal: '120',
      price: '5'
    },
    {
      name: 'Iced Coffee',
      image: '../assets/iced_coffee.jpg',
      ingredients: 'Coffee, ice cubes, milk (optional), sweetener (optional)',
      kcal: '30',
      price: '4'
    },
    {
      name: 'Fresh Orange Juice',
      image: '../assets/orange_juice.jpg',
      ingredients: 'Freshly squeezed orange juice',
      kcal: '110',
      price: '4'
    },
    {
      name: 'Soda Water',
      image: '../assets/soda_water.jpg',
      ingredients: 'Carbonated water',
      kcal: '0',
      price: '3'
    },
    {
      name: 'Lemonade',
      image: '../assets/lemonade.jpg',
      ingredients: 'Fresh lemon juice, water, sugar',
      kcal: '120',
      price: '4'
    },
    {
      name: 'Iced Tea',
      image: '../assets/iced_tea.jpg',
      ingredients: 'Black tea, ice cubes, lemon (optional), sweetener (optional)',
      kcal: '50',
      price: '3'
    },
    {
      name: 'Ginger Ale',
      image: '../assets/ginger_ale.jpg',
      ingredients: 'Carbonated water, ginger syrup, lemon juice',
      kcal: '110',
      price: '4'
    }
];

  vectorSake: Menu[] = [
  {
    name: 'Junmai Daiginjo',
    image: '../assets/junmai_daiginjo.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '120',
    price: '20'
  },
  {
    name: 'Honjozo',
    image: '../assets/honjozo.jpg',
    ingredients: 'Rice, water, koji mold, distilled alcohol',
    kcal: '110',
    price: '18'
  },
  {
    name: 'Nigori',
    image: '../assets/nigori.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '140',
    price: '16'
  },
  {
    name: 'Junmai',
    image: '../assets/junmai.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '130',
    price: '15'
  },
  {
    name: 'Ginjo',
    image: '../assets/ginjo.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '140',
    price: '17'
  },
  {
    name: 'Tokubetsu Junmai',
    image: '../assets/tokubetsu_junmai.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '150',
    price: '18'
  },
  {
    name: 'Yamahai',
    image: '../assets/yamahai.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '160',
    price: '19'
  },
  {
    name: 'Futsushu',
    image: '../assets/futsushu.jpg',
    ingredients: 'Rice, water, koji mold',
    kcal: '130',
    price: '14'
  }
];

vectorDesserts: Menu[] = [
  {
    name: 'Matcha Cheesecake',
    image: '../assets/matcha_cheesecake.jpg',
    ingredients: 'Cream cheese, sugar, eggs, matcha powder, digestive biscuits, butter',
    kcal: '300',
    price: '8'
  },
  {
    name: 'Mochi Ice Cream',
    image: '../assets/mochi_ice_cream.jpg',
    ingredients: 'Glutinous rice flour, sugar, ice cream (various flavors)',
    kcal: '150',
    price: '6'
  },
  {
    name: 'Dorayaki',
    image: '../assets/dorayaki.jpg',
    ingredients: 'Pan-fried sweet pancakes, sweet red bean paste',
    kcal: '200',
    price: '5'
  },
  {
    name: 'Japanese Cotton Cheesecake',
    image: '../assets/japanese_cotton_cheesecake.jpg',
    ingredients: 'Cream cheese, sugar, eggs, flour, milk, lemon juice',
    kcal: '250',
    price: '7'
  },
  {
    name: 'Taiyaki',
    image: '../assets/taiyaki.jpg',
    ingredients: 'Fish-shaped cake, sweet red bean paste, custard, chocolate',
    kcal: '220',
    price: '5'
  },
  {
    name: 'Sakura Mochi',
    image: '../assets/sakura_mochi.jpg',
    ingredients: 'Glutinous rice, sweet red bean paste, salted cherry blossom leaves',
    kcal: '180',
    price: '6'
  },
  {
    name: 'Anmitsu',
    image: '../assets/anmitsu.jpg',
    ingredients: 'Agar jelly, sweet red bean paste, fruit cocktail, black syrup',
    kcal: '220',
    price: '6'
  },
  {
    name: 'Green Tea Ice Cream',
    image: '../assets/green_tea_ice_cream.jpg',
    ingredients: 'Green tea powder, milk, sugar, cream',
    kcal: '180',
    price: '6'
  }
];

  getAppetizers(){
    return this.vectorAppetizers;
  }
  
  getSushi(){
    return this.vectorSushi;
  }

  getRamen(){
    return this.vectorRamen;
  }

  getMeat(){
    return this.vectorMeat;
  }

  getVegan(){
    return this.vectorVegan;
  }

  getDrinks(){
    return this.vectorDrinks;
  }

  getSake(){
    return this.vectorSake;
  }

  getDesserts(){
    return this.vectorDesserts;
  }

  constructor() { }
}
