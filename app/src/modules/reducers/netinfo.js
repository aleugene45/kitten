import {netinfoActionsType} from '../actions/netinfo';

const DEFAULT = {isOnline: false};

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case netinfoActionsType.SET_NETINFO_STATUS: {
      return {isOnline: action.payload};
    }
    default:
      return state;
  }
};
