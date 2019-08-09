import {StyleSheet} from 'react-native';
import themes from '../../../../../themes';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  buttonsCountContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  buttonCount: {
    flex: 1,
    height: '80%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15
  },
  activeButton: {
    backgroundColor: themes.color.default
  },
  input: {
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  contentContainer: {
    flex: 11,
  },
  countText: {
    fontSize: themes.fontSize.large,
    color: 'black'
  },
  itemContainer: {
    width: '100%',
    height: 290,
    justifyContent: 'center',
    alignItems: 'center'
  },
  item: {
    height: 250,
    width: '90%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    backgroundColor: 'lightgray'
  },
  imageContainer: {
    flex: 4,
    marginHorizontal: 15,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  itemInfo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInfoText: {
    fontSize: themes.fontSize.large,
    color: 'black',
    fontWeight: 'bold'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
