import React from 'react'
import { Link, browserHistory } from 'react-router'
import CodeMirrorElement from '../components/code_mirror.jsx'
import TextAreaElement from '../components/text_area.jsx'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/encoder';

class Encoder extends React.Component {
  encodedChange(value){
    this.props.actions.encoded_changed(value);
  }

  xmlChange(value){
    this.props.actions.xml_changed(value);
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-6">
          <h2 className='title'>Encoded</h2>
          <TextAreaElement value={this.props.encoded} onchange={this.encodedChange.bind(this)}></TextAreaElement>
        </div>
        <div className="col-md-6">
          <h2 className='title'>Decoded</h2>
          <CodeMirrorElement pretty={true} value={this.props.xml} onchange={this.xmlChange.bind(this)}></CodeMirrorElement>          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    encoded: state.encoder.encoded,
    xml: state.encoder.xml    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Encoder);