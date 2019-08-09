import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import {netinfoActions} from "../../modules/actions/netinfo";
import {connect} from "react-redux";
import styles from "./styles";

class NetInfoComponent extends Component {
  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.listener);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.listener);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.netinfo.isOnline !== nextProps.netinfo.isOnline;
  }

  listener = connectionInfo => {
    if (connectionInfo.type === 'none') {
      this.props.setNetinfoStatus(false)
    } else {
      this.props.setNetinfoStatus(true)
    }
  };

  render() {
    if (this.props.netinfo.isOnline) {
      return null;
    }

    return <View style={styles.wrapper}>
      <Text style={styles.text}>
        Offline mode.
      </Text>
    </View>
  }
}


NetInfoComponent.propTypes = {
  netinfo: PropTypes.object.isRequired,
  setNetinfoStatus: PropTypes.func.isRequired,
};

const mapStateToProps = ({netinfo}) => ({netinfo});
const mapDispatchToProps = dispatch => ({
  setNetinfoStatus: (status) => dispatch(netinfoActions.setNetinfoStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NetInfoComponent);