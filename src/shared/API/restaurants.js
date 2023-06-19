const restaurants = [
  {
    name: 'Papa John',
    id: '1',
  },
  {
    name: 'Rucola',
    id: '2',
  },
  {
    name: 'Murakami',
    id: '3',
  },
  {
    name: "McDonald's",
    id: '4',
  },
  {
    name: 'Gogi',
    id: '5',
  },
  {
    name: 'Spezzo',
    id: '6',
  },
  {
    name: 'River Grill',
    id: '7',
  },
  {
    name: 'Whisky Corner',
    id: '8',
  },
  {
    name: 'Barvy',
    id: '9',
  },
  {
    name: 'Musafir',
    id: '10',
  },
  {
    name: 'Pivna Duma',
    id: '11',
  },
];

export const products = [
  {
    id: 1,
    title: 'Pepperoni',
    desc: 'Classic pizza with pepperoni, mozzarella, and tomato sauce',
    img: 'https://source.unsplash.com/featured/?margherita+pizza',
    prices: '15',
    restaurant: 'Papa John',
  },
  {
    id: 3,
    title: 'Margherita',
    desc: 'Classic pizza with mozzarella, tomato sauce, and basil',
    img: 'https://source.unsplash.com/featured/?margherita+pizza',
    prices: '12',
    restaurant: 'Papa John',
  },
  {
    id: 4,
    title: 'Hawaiian',
    desc: 'Pizza with ham, pineapple, mozzarella, and tomato sauce',
    img: 'https://source.unsplash.com/featured/?hawaiian+pizza',
    prices: '14',
    restaurant: 'Papa John',
  },
  {
    id: 5,
    title: 'Four Cheese',
    desc: 'Pizza with mozzarella, gorgonzola, parmesan, and provolone',
    img: 'https://source.unsplash.com/featured/?four+cheese+pizza',
    prices: '13',
    restaurant: 'Papa John',
  },
  {
    id: 6,
    title: 'Vegetarian',
    desc: 'Pizza with tomatoes, mushrooms, bell peppers, onions, and mozzarella',
    img: 'https://source.unsplash.com/featured/?vegetarian+pizza',
    prices: '15',
    restaurant: 'Papa John',
  },
  {
    id: 7,
    title: 'Sushi Platter',
    desc: 'Assortment of fresh sushi rolls and sashimi',
    img: 'https://source.unsplash.com/featured/?sushi',
    prices: '25',
    restaurant: 'Murakami',
  },
  {
    id: 8,
    title: 'Ramen',
    desc: 'Traditional Japanese noodle soup with broth, noodles, and various toppings',
    img: 'https://source.unsplash.com/featured/?ramen',
    prices: '15',
    restaurant: 'Murakami',
  },
  {
    id: 9,
    title: 'Tempura',
    desc: 'Lightly battered and deep-fried seafood and vegetables',
    img: 'https://source.unsplash.com/featured/?tempura',
    prices: '18',
    restaurant: 'Murakami',
  },
  {
    id: 10,
    title: 'Teriyaki Chicken',
    desc: 'Grilled chicken glazed with a sweet and savory teriyaki sauce',
    img: 'https://source.unsplash.com/featured/?teriyaki+chicken',
    prices: '20',
    restaurant: 'Murakami',
  },
  {
    id: 11,
    title: 'Miso Soup',
    desc: 'Traditional Japanese soup made with miso paste, tofu, seaweed, and scallions',
    img: 'https://source.unsplash.com/featured/?miso+soup',
    prices: '8',
    restaurant: 'Murakami',
  },
  {
    id: 12,
    title: 'Caprese Salad',
    desc: 'Fresh tomato, mozzarella, and basil salad drizzled with balsamic glaze',
    img: 'https://source.unsplash.com/featured/?caprese',
    prices: '12',
    restaurant: 'Rucola',
  },
  {
    id: 13,
    title: 'Pasta Carbonara',
    desc: 'Classic Italian pasta dish with bacon, eggs, Parmesan cheese, and black pepper',
    img: 'https://source.unsplash.com/featured/?carbonara',
    prices: '16',
    restaurant: 'Rucola',
  },
  {
    id: 14,
    title: 'Margherita Pizza',
    desc: 'Traditional pizza with mozzarella, tomato sauce, and basil',
    img: 'https://source.unsplash.com/featured/?margherita+pizza',
    prices: '14',
    restaurant: 'Rucola',
  },
  {
    id: 15,
    title: 'Chicken Parmesan',
    desc: 'Breaded chicken cutlets topped with tomato sauce and melted mozzarella cheese',
    img: 'https://source.unsplash.com/featured/?chicken+parmesan',
    prices: '18',
    restaurant: 'Rucola',
  },
  {
    id: 16,
    title: 'Tiramisu',
    desc: 'Classic Italian dessert with layers of ladyfingers, mascarpone cheese, and coffee liqueur',
    img: 'https://source.unsplash.com/featured/?tiramisu',
    prices: '8',
    restaurant: 'Rucola',
  },
  {
    id: 17,
    title: 'Khachapuri',
    desc: 'Traditional Georgian cheese bread made with a blend of cheeses and baked until golden and gooey',
    img: 'https://source.unsplash.com/featured/?khachapuri',
    prices: '10',
    restaurant: 'Gogi',
  },
  {
    id: 18,
    title: 'Satsivi',
    desc: 'Roasted chicken or turkey in a creamy walnut sauce flavored with Georgian spices',
    img: 'https://source.unsplash.com/featured/?satsivi',
    prices: '18',
    restaurant: 'Gogi',
  },
  {
    id: 19,
    title: 'Khinkali',
    desc: 'Traditional Georgian dumplings filled with seasoned meat or cheese and served with a savory broth',
    img: 'https://source.unsplash.com/featured/?khinkali',
    prices: '14',
    restaurant: 'Gogi',
  },
  {
    id: 20,
    title: 'Shashlik',
    desc: 'Grilled skewers of marinated meat, typically pork, beef, or lamb, with a smoky and flavorful taste',
    img: 'https://source.unsplash.com/featured/?shashlik',
    prices: '20',
    restaurant: 'Gogi',
  },
  {
    id: 21,
    title: 'Chakhokhbili',
    desc: 'Georgian chicken stew with tomatoes, onions, and a fragrant blend of herbs and spices',
    img: 'https://source.unsplash.com/featured/?chakhokhbili',
    prices: '16',
    restaurant: 'Gogi',
  },
  {
    id: 22,
    title: 'Big Mac',
    desc: 'Iconic burger with two beef patties, special sauce, lettuce, cheese, pickles, and onions',
    img: 'https://source.unsplash.com/featured/?big+mac',
    prices: '5',
    restaurant: "McDonald's",
  },
  {
    id: 23,
    title: 'McChicken',
    desc: 'Chicken sandwich with a breaded chicken patty, lettuce, and mayonnaise',
    img: 'https://source.unsplash.com/featured/?mcchicken',
    prices: '4',
    restaurant: "McDonald's",
  },
  {
    id: 24,
    title: 'French Fries',
    desc: 'Crispy and golden potato fries, served hot and seasoned with salt',
    img: 'https://source.unsplash.com/featured/?french+fries',
    prices: '2',
    restaurant: "McDonald's",
  },
  {
    id: 25,
    title: 'Filet-O-Fish',
    desc: 'Fish fillet sandwich with tartar sauce, cheese, and a soft bun',
    img: 'https://source.unsplash.com/featured/?filet-o-fish',
    prices: '4',
    restaurant: "McDonald's",
  },
  {
    id: 26,
    title: 'McFlurry',
    desc: "Creamy soft-serve ice cream with a choice of mix-ins like Oreo, M&M's, or caramel",
    img: 'https://source.unsplash.com/featured/?mcflurry',
    prices: '3',
    restaurant: "McDonald's",
  },

  {
    id: 27,
    title: 'Spezzo Special',
    desc: 'Signature Italian dish with a blend of flavors and ingredients',
    img: 'https://source.unsplash.com/featured/?italian+cuisine',
    prices: '18',
    restaurant: 'Spezzo',
  },
  {
    id: 28,
    title: 'River Grill Steak',
    desc: 'Juicy grilled steak served with a side of vegetables',
    img: 'https://source.unsplash.com/featured/?grill',
    prices: '28',
    restaurant: 'River Grill',
  },
  {
    id: 29,
    title: 'Whisky Sour',
    desc: 'Classic cocktail made with whisky, lemon juice, and simple syrup',
    img: 'https://source.unsplash.com/featured/?whisky+sour',
    prices: '10',
    restaurant: 'Whisky Corner',
  },
  {
    id: 30,
    title: 'Borscht',
    desc: 'Traditional Ukrainian beet soup with a rich flavor',
    img: 'https://source.unsplash.com/featured/?borscht',
    prices: '12',
    restaurant: 'Barvy',
  },
  {
    id: 31,
    title: 'Musafir Kebab',
    desc: 'Tender and flavorful kebab with a blend of spices and herbs',
    img: 'https://source.unsplash.com/featured/?kebab',
    prices: '16',
    restaurant: 'Musafir',
  },
  {
    id: 32,
    title: 'Craft Beer',
    desc: 'Selection of locally brewed craft beers',
    img: 'https://source.unsplash.com/featured/?craft+beer',
    prices: '6',
    restaurant: 'Pivna Duma',
  },

  {
    id: 33,
    title: 'Pasta Carbonara',
    desc: 'Classic Italian pasta dish with bacon, eggs, Parmesan cheese, and black pepper',
    img: 'https://source.unsplash.com/featured/?carbonara',
    prices: '16',
    restaurant: 'Spezzo',
  },
  {
    id: 34,
    title: 'Margherita Pizza',
    desc: 'Traditional pizza with mozzarella, tomato sauce, and basil',
    img: 'https://source.unsplash.com/featured/?margherita+pizza',
    prices: '14',
    restaurant: 'Spezzo',
  },
  {
    id: 35,
    title: 'Tiramisu',
    desc: 'Classic Italian dessert with layers of ladyfingers, mascarpone cheese, and coffee liqueur',
    img: 'https://source.unsplash.com/featured/?tiramisu',
    prices: '8',
    restaurant: 'Spezzo',
  },
  {
    id: 36,
    title: 'BBQ Ribs',
    desc: 'Tender and smoky ribs with a tangy barbecue sauce',
    img: 'https://source.unsplash.com/featured/?bbq+ribs',
    prices: '22',
    restaurant: 'River Grill',
  },
  {
    id: 37,
    title: 'Grilled Salmon',
    desc: 'Fresh salmon fillet grilled to perfection',
    img: 'https://source.unsplash.com/featured/?grilled+salmon',
    prices: '24',
    restaurant: 'River Grill',
  },
  {
    id: 38,
    title: 'Old Fashioned',
    desc: 'Classic cocktail made with whisky, sugar, bitters, and orange peel',
    img: 'https://source.unsplash.com/featured/?old+fashioned',
    prices: '12',
    restaurant: 'Whisky Corner',
  },
  {
    id: 39,
    title: 'Chicken Kiev',
    desc: 'Traditional Ukrainian dish with breaded chicken filled with garlic butter',
    img: 'https://source.unsplash.com/featured/?chicken+kiev',
    prices: '16',
    restaurant: 'Barvy',
  },
  {
    id: 40,
    title: 'Biryani',
    desc: 'Flavorful rice dish with aromatic spices and tender meat or vegetables',
    img: 'https://source.unsplash.com/featured/?biryani',
    prices: '18',
    restaurant: 'Musafir',
  },
  {
    id: 41,
    title: 'Craft IPA',
    desc: 'Hoppy and bold India Pale Ale from a local brewery',
    img: 'https://source.unsplash.com/featured/?craft+ipa',
    prices: '7',
    restaurant: 'Pivna Duma',
  },
];

export const getRestaurants = () => {
  return restaurants;
};

export const getRestaurantById = restaurantId => {
  return restaurants.find(restaurant => restaurant.id === restaurantId);
};

// import axios from 'axios';

// const restaurantsInstance = axios.create({
//   baseURL: 'https://63c18411376b9b2e647dc979.mockapi.io/users',
// });

// export const getRestaurants = () => {
//   return restaurantsInstance.get('/');
// };

// export const getCards = (page = 1) => {
//   return cardsInstance.get('/', {
//     params: {
//       page,
//       limit: 3,
//     },
//   });
// };
