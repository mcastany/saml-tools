import React from 'react'
import { Link, browserHistory } from 'react-router'
import CodeMirrorElement from '../components/code_mirror.jsx'
import TextAreaElement from '../components/text_area.jsx'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/deflator';

class Deflator extends React.Component {
  inflatedChange(value){
    this.props.actions.inflated_changed(value);
  }

  deflatedChange(value){
    this.props.actions.deflated_changed(value);
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-6">
          <h2 className='title'>Deflated</h2>
          <TextAreaElement value={this.props.deflated} onchange={this.deflatedChange.bind(this)}></TextAreaElement>
        </div>
        <div className="col-md-6">
          <h2 className='title'>Inflated</h2>
          <CodeMirrorElement value={this.props.inflated} onchange={this.inflatedChange.bind(this)}></CodeMirrorElement>          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    deflated: state.deflator.deflated,
    inflated: state.deflator.inflated    
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
)(Deflator);