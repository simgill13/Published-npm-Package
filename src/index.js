import React from 'react';
import Second from './second';
// import Alert from './alert';
import InputBanner from './InputBanner';
import './sim.css'
import './tim.scss'


class Sim extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'simmmmm'
        }
       
      }
  render() {
    return (
      <div id='indx' className='simtest' >This is  {this.state.name}! THIS IS A COMPONENT FROM NPM MODULE</div>
    );
  }
}






export { Sim, Second ,InputBanner}
