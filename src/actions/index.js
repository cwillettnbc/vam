/**
 * actions for redux
 */

export const setBrand = name => ({
  type: 'SET_BRAND',
  name
});
export const setPlatform = name => ({
  type: 'SET_PLATFORM',
  name
});
export const setMode = name => ({
  type: 'SET_MODE',
  name
});
export const setConfig = data => ({
  type: 'SET_CONFIG',
  data
});

export const getState = (state) => {
  return state
};