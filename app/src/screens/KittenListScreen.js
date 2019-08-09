import React from 'react';
import KittenListPage from '../containers/KittenList/views/KittenListPage/KittenListPage';
import themes from '../../themes';

const KittenListScreen = (props) => {
  return <KittenListPage {...props}/>
};

KittenListScreen.navigationOptions = {
  title: 'Kitten List',
  headerStyle: themes.themesStyles.defaultHeader,
  headerTitleStyle: themes.themesText.defaultHeaderTitle
};

export default KittenListScreen;
