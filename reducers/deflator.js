import Service from '../services';

export default (state, action) => {
  switch(action.type) {
    case 'INFLATED_CHANGED':
      return Object.assign({}, state, (new Service()).deflate(action.inflated));
    case 'DEFLATED_CHANGED':
      return Object.assign({}, state, (new Service()).inflate(action.deflated));
    default:
      return state || {};
  }
}