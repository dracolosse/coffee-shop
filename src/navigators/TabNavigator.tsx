import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const renderTabBarBackground = () => (
  <BlurView overlayColor="" blurAmount={15} style={styles.BlurViewStyle} />
);

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const TabNavigator = () => {
  const renderTabBarIconHome = ({focused}: TabBarIconProps) => (
    <CustomIcon
      name="home"
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
    />
  );
  const renderTabBarIconCart = ({focused}: TabBarIconProps) => (
    <CustomIcon
      name="cart"
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
    />
  );
  const renderTabBarIconFavorite = ({focused}: TabBarIconProps) => (
    <CustomIcon
      name="like"
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
    />
  );
  const renderTabBarIconHistory = ({focused}: TabBarIconProps) => (
    <CustomIcon
      name="bell"
      size={25}
      color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: renderTabBarBackground,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: renderTabBarIconHome,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: renderTabBarIconCart,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: renderTabBarIconFavorite,
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: renderTabBarIconHistory,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default TabNavigator;
