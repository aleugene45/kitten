import React from 'react';
import KittenViewPage from '../containers/KittenView/views/KittenViewPage/KittenViewPage';
import themes from "../../themes";

const KittenViewScreen = (props) => {
  return <KittenViewPage {...props} {...props.navigation.state.params}/>
};

KittenViewScreen.navigationOptions = {
  title: 'Kitten View',
  headerStyle: themes.themesStyles.defaultHeader,
  headerTitleStyle: themes.themesText.defaultHeaderTitle
};

export default KittenViewScreen;
