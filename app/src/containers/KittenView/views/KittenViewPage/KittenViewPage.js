import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import Image from 'react-native-image-progress'
import styles from './styles'

const lorem = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

class KittenViewPage extends PureComponent {
  render() {
    return <View style={styles.wrapper}>
      <Image
        style={styles.image}
        indicator={() => <ActivityIndicator color={'black'} size={40}/>}
        source={{uri: this.props.kitten.imageUrl}}
        resizeMode={'cover'}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{this.props.kitten.label}</Text>
        <Text style={styles.info}>{lorem}</Text>
      </View>
    </View>
  }
}

KittenViewPage.propTypes = {
  kitten: PropTypes.object.isRequired,
};

export default KittenViewPage;
