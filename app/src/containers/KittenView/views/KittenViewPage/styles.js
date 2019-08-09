import { StyleSheet } from 'react-native';
import themes from "../../../../../themes";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 4,
  },
  infoContainer: {
    flex: 6,
    margin: 15,
    flexDirection: 'column'
  },
  title: {
    fontSize: themes.fontSize.large,
    color: 'black',
    fontWeight: 'bold'
  },
  info: {
    fontSize: themes.fontSize.default,
    color: 'black',
  }
});
