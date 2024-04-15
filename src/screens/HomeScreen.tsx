/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useStore} from '../store/store';
import {filterCategory, getCategoriesFromData} from '../api/common';
import {Coffee} from '../api/Coffee';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import CustomIcon from '../components/CustomIcon';
import CoffeeCard from '../components/CoffeeCard';

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList);
  const BeanList = useStore((state: any) => state.BeanList);
  const [categories, setCategories] = React.useState<string[]>(
    getCategoriesFromData(CoffeeList),
  );
  const [searchText, setSearchText] = React.useState<string>('');
  const [categoryIndex, setCategoryIndex] = React.useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffe, setSortedCoffee] = React.useState<Coffee[]>(
    filterCategory(CoffeeList, categoryIndex.category),
  );

  const tabBarHeight = useBottomTabBarHeight();

  const handleCategorySelected = (index: number, category: string) => {
    setCategoryIndex({index, category});
    setSortedCoffee([...filterCategory(CoffeeList, category)]);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewContainer}>
        {/* App Header */}
        <HeaderBar title="Home" />
        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}coffee for you
        </Text>
        {/* Search Bar */}
        <View style={styles.SearchContainer}>
          <TouchableOpacity onPress={() => {}}>
            <CustomIcon
              style={styles.SearchIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                searchText.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Find your Coffe ..."
            value={searchText}
            onChange={event => setSearchText(event.nativeEvent.text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.SearchInput}
          />
        </View>

        {/* Coffee Categories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.CategoryScrollView}>
          {categories.map((category, index) => (
            <View key={index.toString()} style={styles.CategoryViewContainer}>
              <TouchableOpacity
                style={styles.CategoryItemContainer}
                onPress={() => handleCategorySelected(index, category)}>
                <Text
                  style={[
                    styles.CategoryItemText,
                    index === categoryIndex.index
                      ? styles.CategoryItemTextActive
                      : {},
                  ]}>
                  {category}
                </Text>
                {categoryIndex.index === index && (
                  <View style={styles.CategoryItemIndicator} />
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* Coffee Flat List */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sortedCoffe}
          keyExtractor={(item: Coffee) => item.id}
          contentContainerStyle={styles.FlatListContainer}
          renderItem={({item}) => (
            <TouchableOpacity>
              <CoffeeCard
                name={item.name}
                image_link={item.imagelink_portrait}
                prices={item.prices}
                special_ingredient={item.special_ingredient}
                average_rating={item.average_rating}
                onAddButtonPress={() => {}}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewContainer: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  SearchContainer: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
  },
  SearchIcon: {
    marginHorizontal: SPACING.space_20,
  },
  SearchInput: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  CategoryScrollView: {
    paddingHorizontal: SPACING.space_20,
    marginBottom: SPACING.space_20,
  },
  CategoryViewContainer: {
    paddingHorizontal: SPACING.space_15,
  },
  CategoryItemContainer: {
    alignItems: 'center',
  },
  CategoryItemText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
    marginBottom: SPACING.space_4,
  },
  CategoryItemTextActive: {
    color: COLORS.primaryOrangeHex,
  },
  CategoryItemIndicator: {
    height: SPACING.space_10,
    width: SPACING.space_10,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryOrangeHex,
  },
  FlatListContainer: {
    gap: SPACING.space_20,
    paddingVertical: SPACING.space_20,
    paddingHorizontal: SPACING.space_30,
  },
});

export default HomeScreen;
