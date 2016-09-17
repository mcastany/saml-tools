export default (state, action) => {
  switch(action.type) {
    case 'XML_CHANGED':
      // encoded XML and update Encoded
      var encoded = '';
      try{
       encoded = window.btoa(action.xml);
      } catch(e){
        console.log(e);
        encoded = ''
      }
      return {
        xml: action.xml,
        encoded: encoded
      };
      break;
    case 'ENCODED_CHANGE':
      // Decode content and update XML
      var decoded_data = '';
      try{
       decoded_data = window.atob(action.encoded);
      } catch(e){
        console.log(e);
        decoded_data = ''
      }

      return {
        xml: decoded_data,
        encoded: action.encoded
      };
    default:
      return state || {};
  }
}