import React from 'react';

export default class TextAreaElement extends React.Component {
  handleChange(e){
    if (this.props.value !== e.target.value && this.props.onchange){
      this.props.onchange(e.target.value);
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  render() {
    return (  
      <textarea 
      style={{width:'100%', height: '300px'}}
      value={this.props.value}
      defaultValue=''
      onBlur={this.handleChange.bind(this)}
      />)
  }
}