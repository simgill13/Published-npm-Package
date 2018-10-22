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
            name:':)'
        }
       
      }
  render() {
    return (
      <div>
        <div>
         Npm Library Template
        </div>

        <div>
         state {this.state.name}
        </div>

        <div id='indx' className='css' >
          LOADING CSS FILES TEST
        </div>
      <br/>
        <div className='sasstest'>
            Loading SCSS  Files TEST
        </div> 
      </div>
    );
  }
}






export { Sim, Second ,InputBanner,Alert}
