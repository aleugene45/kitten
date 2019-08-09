import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Alert
} from 'react-native';
import {connect} from "react-redux";
import Image from 'react-native-image-progress'
import {routes} from '../../../../../stack'
import styles from './styles'
import {kittenActions} from '../../../../modules/actions/kittens'

class KittenListPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: '30',
      inputCount: '',
    };
    this.renderKittens = this.renderKittens.bind(this);
    this.renderItemCard = this.renderItemCard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.kittens && nextProps.netinfo.isOnline !== this.props.netinfo.isOnline && nextProps.netinfo.isOnline) {
      this.props.getKittens(this.state.count)
    }
  }

  chooseCount(value, emptyCustom = true) {
    if (value !== '') {
      if (parseInt(value) <= 5000) {
        if (emptyCustom && this.state.inputCount !== '') {
          this.setState({count: value, inputCount: ''});
        } else {
          this.setState({count: value});
        }
        this.props.getKittens(value)
      } else {
        this.setState({inputCount: ''});
        Alert.alert('5000 kittens maximum!');
      }
    }
  }

  customCount(value) {
    var reg = /^[0-9]*$/;
    if (reg.test(value)) {
      this.setState({inputCount: value});
    }
  }

  openKittenView(item) {
    this.props.navigation.navigate({
      key: item.key,
      routeName: routes.KittenView,
      params: {
        kitten: item,
      }
    })
  }

  renderItemCard(item) {
    return <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => this.openKittenView(item)}
        activeOpacity={1}
        style={styles.item}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            indicator={() => <ActivityIndicator color={'black'} size={40}/>}
            source={{uri: item.imageUrl}}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemInfoText}>
            {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  }

  renderLoader() {
    return <View style={styles.loading}>
      <ActivityIndicator color={'black'} size={40}/>
    </View>
  }

  renderNoKittens() {
    return <View style={styles.loading}>
      <Text style={styles.itemInfoText}>No Kittens ;(</Text>
    </View>
  }

  renderKittens () {
    if (this.props.kittens && this.props.kittens.length) {
      return <FlatList
        data={this.props.kittens}
        renderItem={({item}) => this.renderItemCard(item)}
        keyExtractor={item => item.key}
      />
    } else if (!this.props.kittens) {
      return this.renderLoader()
    } else {
      return this.renderNoKittens()
    }
  }

  render() {
    return <View style={styles.wrapper}>
      <View style={styles.buttonsCountContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => this.chooseCount('30')}
                          style={[styles.buttonCount, this.state.count === '30' ? styles.activeButton : {}]}>
          <Text style={styles.countText}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => this.chooseCount('50')}
                          style={[styles.buttonCount, this.state.count === '50' ? styles.activeButton : {}]}>
          <Text style={styles.countText}>50</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => this.chooseCount('100')}
                          style={[styles.buttonCount, this.state.count === '100' ? styles.activeButton : {}]}>
          <Text style={styles.countText}>100</Text>
        </TouchableOpacity>
        <View style={styles.buttonCount}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => this.customCount(value)}
            value={this.state.inputCount}
            placeholder={'Custom'}
            underlineColorAndroid={'transparent'}
            blurOnSubmit={true}
            placeholderTextColor={'gray'}
            keyboardType={'numeric'}
            onSubmitEditing={() => {
              this.chooseCount(this.state.inputCount, false);
            }}
          />
        </View>
      </View>
      <View style={styles.contentContainer}>
        {this.renderKittens()}
      </View>
    </View>
  }
}

KittenListPage.propTypes = {
  navigation: PropTypes.object.isRequired,
  netinfo: PropTypes.object.isRequired,
  kittens: PropTypes.array,
  getKittens: PropTypes.func.isRequired,
};

const mapStateToProps = ({kittens, netinfo}) => ({kittens, netinfo});
const mapDispatchToProps = dispatch => ({
  getKittens: (count) => dispatch(kittenActions.getKittens({count})),
});
export default connect(mapStateToProps, mapDispatchToProps)(KittenListPage);
