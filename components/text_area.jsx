import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class TextAreaElement extends React.Component {
  handleChange(e){
    if (this.props.value !== e.target.value){
      this.props.actions.encoded_changed(e.target.value);
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  render() {
    console.log('Marcos', this.props.value)
    return (  
    <textarea 
      style={{width:'100%', height: '300px'}}
      value={this.props.value}
      defaultValue=''
      onBlur={this.handleChange.bind(this)}
      />)
  }
}

function mapStateToProps(state) {
  return {
    value: state.encoded    
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
)(TextAreaElement);