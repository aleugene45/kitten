import {kittenActionsType} from '../actions/kittens';

const DEFAULT = null;

export default (state = DEFAULT, action = {}) => {
  switch (action.type) {
    case kittenActionsType.SET_KITTENS: {
      return action.payload;
    }
    default:
      return state;
  }
};
