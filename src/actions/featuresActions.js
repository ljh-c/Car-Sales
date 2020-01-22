// action creator
export const buyFeature = (feature) => {
  // action object
  console.log('hello from action creator');
  return { type: 'BUY_FEATURE', payload: feature };
}

export const removeFeature = (featureId) => {
  return { type: 'REMOVE_FEATURE', payload: featureId };
}