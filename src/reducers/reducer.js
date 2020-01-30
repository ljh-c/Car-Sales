const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

const minivanState = {
  additionalPrice: 0,
  car: {
    price: 2639,
    name: 'Mom\'s Minivan',
    image:
      'https://17kwo31takqarktfu433l181-wpengine.netdna-ssl.com/wp-content/uploads/2016/05/2016-Dodge-Grand-Caravan-Family-Car-793x350.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'Batmobile mode', price: 15000 },
    { id: 2, name: 'All-wheel drive', price: 1400 },
    { id: 3, name: 'Apple CarPlay', price: 480 },
    { id: 4, name: 'Leather seats', price: 1500 },
    { id: 5, name: 'Blizzard pearl color', price: 425}
  ]
};

export const featuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_FEATURE':
      console.log('hi from reducer');
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features,
            action.payload
          ]
        },
        additionalPrice: state.additionalPrice + action.payload.price, 
        additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.payload.id)
      };

    case 'REMOVE_FEATURE':
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(feature => feature.id !== action.payload.id)
        },
        additionalPrice: state.additionalPrice - action.payload.price,
        additionalFeatures: [
          ...state.additionalFeatures,
          action.payload
        ]
      };

    case 'MINIVAN':
      console.log('hi minivan');
      return minivanState;

    case 'MUSTANG':
      return initialState;

    default:
      return state;
  }
};

export default featuresReducer;