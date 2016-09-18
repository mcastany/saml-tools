import CodeMirror from 'CodeMirror'
import React from 'react';
 
export default class CodeMirrorElement extends React.Component {
  componentDidMount(){
    this.editor = CodeMirror.fromTextArea(this._input, {  mode: "xml", foldGutter: true, lineNumbers: true });
    this.editor.on('blur', this.handleChange.bind(this, true))
    this.editor.setValue(this.props.value || '');
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(()=>{
      if (this.editor && nextProps.value !== undefined && this.editor.getValue() != nextProps.value) {
        this.editor.setValue(nextProps.value);
      }
    }, 0);
	}
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value;
  }

  handleChange(){
    const value = this.editor.getValue();
    if (this.props.value !== value && this.props.onchange){
      this.props.onchange(value);
    }
  }

  render() {
    return (  
    <textarea 
      ref={(c) => this._input = c} style={{width:'100%', height: '300px', border: '1px solid black'}}
      value={this.props.value}
      ></textarea>)
  }
}