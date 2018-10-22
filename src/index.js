import React from 'react';
import Second from './second';
import Alert from './alert';
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
      <div>
        <div id='indx' className='css' >
          This is  {this.state.name}!NPM COMPONENT
        </div>

        <div className='sasstest'>
          TEST TEST TEST
         </div> 
      </div>
    );
  }
}






export { Sim, Second ,InputBanner,Alert}
