import React from 'react';
import Second from './second';
// import Alert from './alert';
import InputBanner from './InputBanner';


class Sim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'sim'
        }
       
      }
  render() {
    return (
      <div style={{backgroundColor:"red"}} >This is  {this.state.name}! THIS IS A COMPONENT FROM NPM MODULE</div>
    );
  }
}






export { Sim, Second ,InputBanner}
