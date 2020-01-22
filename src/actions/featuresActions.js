// action creator
export const buyFeature = (featureId) => {
  // action object
  return { type: 'BUY_FEATURE', payload: featureId };
}

export const removeFeature = () => {
  return { type: 'REMOVE_FEATURE' };
}