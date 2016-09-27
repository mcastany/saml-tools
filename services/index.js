import pako from 'pako';

export default class Service{
  constructor(){

  }

  inflate(deflated){
    try {
      return { inflated : pako.inflateRaw(atob(decodeURIComponent(deflated)), {to : 'string'})};
    } catch (err) {
      return { err : err}
    }
  }

  deflate(inflated){
    try {
      return { deflated : encodeURIComponent(btoa(pako.deflateRaw(inflated, {to : 'string'}))) };
    } catch (err) {
      return { err : err }
    }
  }

  decode(encoded){
    try{
      return { xml : window.atob(encoded)};
    } catch(e){
      return { err : e }
    }
  }

  encode(decoded){
    try{
      return { encoded : window.btoa(decoded)};
    } catch(e){
      return { err: e }
    }
  }
}