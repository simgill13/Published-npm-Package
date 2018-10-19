import React from 'react';
import Second from './second';
// import Alert from './alert';
import InputBanner from './InputBanner';
import './sim.css'


class Sim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'sim'
        }
       
      }
  render() {
    return (
      <div className='simtest' >This is  {this.state.name}! THIS IS A COMPONENT FROM NPM MODULE</div>
    );
  }
}






export { Sim, Second ,InputBanner}
