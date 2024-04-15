/*
{
    id: 'B1',
    name: 'Robusta Beans',
    description:
      'Robusta beans are larger and more rounded than the other bean varieties. These plants typically grow much larger than Arabica plants, measuring between 15 and 20 feet. Robusta beans are typically considered to be hardier because they can grow at lower altitudes and resist diseases. But recent research suggests that they don’t handle heat as well as was previously thought.',
    roasted: 'Medium Roasted',
    imagelink_square: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_square.png'),
    imagelink_portrait: require('../assets/coffee_assets/robusta_coffee_beans/robusta_coffee_beans_portrait.png'),
    ingredients: 'Africa',
    special_ingredient: 'From Africa',
    prices: [
      {size: '250gm', price: '5.50', currency: '$'},
      {size: '500gm', price: '10.50', currency: '$'},
      {size: '1Kg', price: '18.50', currency: '$'},
    ],
    average_rating: 4.7,
    ratings_count: '6,879',
    favourite: false,
    type: 'Bean',
    index: 0,
  }
  */
export type Bean = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: string;
  imagelink_portrait: string;
  ingredients: string;
  special_ingredient: string;
  prices: {size: string; price: string; currency: string}[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
};
