export const kittenActionsType = {
  GET_KITTENS: 'GET_KITTENS',
  SET_KITTENS: 'SET_KITTENS',
};

const getKittens = payload => ({
  type: kittenActionsType.GET_KITTENS,
  payload,
});
const setKittens = payload => ({
  type: kittenActionsType.SET_KITTENS,
  payload,
});


export const kittenActions = {
  getKittens,
  setKittens,
};
