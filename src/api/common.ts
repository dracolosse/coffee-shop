import {Coffee} from './Coffee';

export function getCategoriesFromData(data: {name: string}[]) {
  const categories = data.map((item: {name: string}) => item.name);
  return ['All', ...new Set(categories)];
}

export function filterCategory(data: Coffee[], category: string) {
  if (category === 'All') {
    return data;
  }
  return data.filter((item: {name: string}) => item.name === category);
}
