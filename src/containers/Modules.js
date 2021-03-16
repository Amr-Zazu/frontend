import React, { Component }  from 'react' ;
import axios from 'axios' ;

// import './ModuleStyle.css' ;

class Modules extends Component {
  state = {
    modules : [] 
  } 

 componentDidMount()  {
    axios.get('js/data.json').then(res => {this.setState({ modules: res.data.modules}) }  )
  };
  render(){

    const {modules} = this.state ;
    const modulesList = modules.map( (moduleItem) => {
      return(
        <div id='ModulePart' className={moduleItem.class} first={moduleItem.id} key = {moduleItem.id}>
              <h2 id='ModuleTitle' className={moduleItem.class} first={moduleItem.id}>{moduleItem.title}</h2>
              <p id='ModuleDesc' className={moduleItem.class} first={moduleItem.id}>{moduleItem.description}</p>
              <button id='ModuleButton'>Start</button>
          </div>
      );
    });
    return (
      <div id='ModuleSection'>
      <div className="container">
          <span id='Span'>Modules</span>
          {modulesList}
      </div>
  </div>
    );

  };
    
};
export default Modules;