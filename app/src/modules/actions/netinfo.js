export const netinfoActionsType = {
  SET_NETINFO_STATUS: 'SET_NETINFO_STATUS',
};

export const setNetinfoStatus = payload => ({
  type: netinfoActionsType.SET_NETINFO_STATUS,
  payload,
});


export const netinfoActions = {
  setNetinfoStatus,
};
