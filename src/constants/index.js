export const categories = [
  {
    id: 1,
    name: "Pho",
    image: require("../assets/images/pho.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("../assets/images/burger.png"),
  },
  {
    id: 3,
    name: "Pizza",
    image: require("../assets/images/pizza.png"),
  },
  {
    id: 4,
    name: "Thai",
    image: require("../assets/images/thai.png"),
  },
  {
    id: 5,
    name: "Takeout",
    image: require("../assets/images/takeout.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../assets/images/dessert.png"),
  },
];

export const featured = {
  id: 1,
  title: "Lemongrass? Yum!",
  description: "Lemongrass as the main base for marinade...",
  restaurants: [
    {
      id: 1,
      name: "Pho Auntie",
      image: require("../assets/images/phoauntie-banh.png"),
      description: "Authentic Vietnamese Food",
      lng: -122.0868854,
      lat: 37.694372,
      address: "2690 Castro Valley Blvd",
      stars: 5,
      reviews: "2.8k",
      category: "Vietnamese",
      dishes: [
        {
          id: 1,
          name: "Bún Gà Nướng",
          description: "Grilled Lemongrass Chicken & Rice Noodle",
          price: 15.25,
          image: require("../assets/images/phoauntie-chicken.png"),
        },
        {
          id: 2,
          name: "Bánh Xèo",
          description: "Crispy & Savory Vietnamese Crêpes / Pancakes",
          price: 15.95,
          image: require("../assets/images/phoauntie-crepe.png"),
        },
        {
          id: 3,
          name: "Bánh Hỏi",
          description:
            "Fine woven noodle sheets, grilled pork, sugarcane shrimp, sausage meatballs, peanut, with fish sauce",
          price: 16.5,
          image: require("../assets/images/phoauntie-mix.png"),
        },
      ],
    },
    {
      id: 2,
      name: "Farmhouse Kitchen Thai Cuisine",
      image: require("../assets/images/farmhousethai-platter.png"),
      description: "Modern take to homecooked Thai food",
      lng: -122.1127021,
      lat: 37.6920466,
      address: "16695 E 14th St",
      stars: 4,
      reviews: "1.4k",
      category: "Thai",
      dishes: [
        {
          id: 1,
          name: "Volcano Noodles",
          description:
            "Spicy noodles stir-fried with our house-made godmother sauce served with a beefy braised rib",
          price: 29.95,
          image: require("../assets/images/farmhousethai-noodles.png"),
        },
        {
          id: 2,
          name: "Lobster Little Lao Set",
          description:
            "Celebrate the 🗽 🇺🇸 4th with 1.5 lb live Maine lobster drizzled with garlic turmeric sauce and our signature dishes",
          price: 94.99,
          image: require("../assets/images/farmhousethai-platter.png"),
        },
        {
          id: 3,
          name: "Thai Iced Tea",
          description:
            "Strong (yet not bitter) tea taste, flavor notes of warm honey & vanilla, creamy consistency, and almost milkshake-like sweetness",
          price: 4.99,
          image: require("../assets/images/farmhousethai-tea.png"),
        },
      ],
    },
    {
      id: 3,
      name: "Sunflower Hayward",
      image: require("../assets/images/sunflower-spread.png"),
      description: "Best Chinese Halal Food",
      lng: -122.0825393,
      lat: 37.6763381,
      address: "1213 A St",
      stars: 4,
      reviews: "1.1k",
      category: "Chinese",
      dishes: [
        {
          id: 1,
          name: "Mongolian Beef",
          description: "One of our most popular dishes!",
          price: 13.99,
          image: require("../assets/images/sunflower-beef.png"),
        },
        {
          id: 2,
          name: "Mushroom Prawns",
          description: "Shrimp with garlic sautéed mushrooms",
          price: 10,
          image: require("../assets/images/sunflower-mushroom.png"),
        },
        {
          id: 3,
          name: "Broccoli Prawns",
          description: "Spicy!",
          price: 10,
          image: require("../assets/images/sunflower-broccoli.png"),
        },
      ],
    },
  ],
};
