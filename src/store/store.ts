import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CoffeeData from '../data/CoffeeData';
import BeansData from '../data/BeansData';

export const useStore = create(
  persist(
    (_set, _get) => ({
      CoffeeList: CoffeeData,
      BeanList: BeansData,
      CartPrice: 0,
      FavoriteList: [],
      CartList: [],
      OrderHistoryList: [],
    }),
    {
      name: 'coffe-app',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
