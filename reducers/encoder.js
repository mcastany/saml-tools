import Service from '../services';

export default (state, action) => {
  switch(action.type) {
    case 'XML_CHANGED':
      return Object.assign({}, state, (new Service()).encode(action.xml));
    case 'ENCODED_CHANGE':
      return Object.assign({}, state, (new Service()).decode(action.encoded));
    default:
      return state || {};
  }
}