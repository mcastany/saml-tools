import pako from 'pako';

export default (state, action) => {
  switch(action.type) {
    case 'INFLATED_CHANGED':
      var deflated = '';

      try {
        deflated = encodeURIComponent(btoa(pako.deflateRaw(action.inflated, {to : 'string'})));
      } catch (err) {
        console.log(err);
      }

      return {
        inflated: action.inflated,
        deflated: deflated
      };
    case 'DEFLATED_CHANGED':
      var inflated = '';

      try {
        inflated = pako.inflateRaw(atob(decodeURIComponent(action.deflated)), {to : 'string'});
      } catch (err) {
        console.log(err);
      }
      return {
        inflated: inflated,
        deflated: action.deflated
      };
    default:
      return state || {};
  }
}