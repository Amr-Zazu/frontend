import React  from 'react' ;
import {BrowserRouter , Route} from 'react-router-dom' ;
import Navbar from './Navbar';
import Login from './Login' ;
import { Link, Redirect } from 'react-router-dom';

import './HomeStyle.css' ;

const Home = () =>  {
//     const logIn = () => {
//         <BrowserRouter>
//         <Navbar/>
//         <Route path="/login" component={Login} />
//         </BrowserRouter>

//     }
    return (
      <div  id='HomeSection'>
      <div className='container'>
          <div id='HomeInformation'>
              <h2 id='HomeTitle'>Image Processing</h2>
              <p id='HomeDesc'>
                  <span id='Span'>ImagePro</span> is a website for process Images with many modules
              </p>
              <Link id='HomeBtn' to="/login">Let's Begin</Link>
          </div>
      </div>
  </div>
    );
}

export default Home;