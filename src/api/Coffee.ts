import {ImageProps} from 'react-native';

// Type definition for Coffee object
export type Coffee = {
  id: string;
  name: string;
  description: string;
  roasted: string;
  imagelink_square: ImageProps;
  imagelink_portrait: ImageProps;
  ingredients: string;
  special_ingredient: string;
  prices: {size: string; price: string; currency: string}[];
  average_rating: number;
  ratings_count: string;
  favourite: boolean;
  type: string;
  index: number;
};
