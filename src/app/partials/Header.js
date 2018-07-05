import React from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css"
import '../App.css'
import { createHashHistory } from 'history';

export const Header = () => {


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });

      const logoutHandler = (event) => {
        const history = createHashHistory();
          event.preventDefault();
          localStorage.removeItem("sessionId");
          history.push("/")
      }
    
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <div className='container'>
                        <span className='center bitbook'><Link to='/'>BitBook</Link></span>
                        <a href="!#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/feed'>Feed</Link></li>
                            <li><Link to='/people'>People</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                            <li><a href="#" onClick={logoutHandler} className={`${!localStorage.getItem("sessionId") ? "hideLogout" : ""}`}>Logout</a></li> 
                        </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to='/feed'>Feed</Link></li>
                <li><Link to='/people'>People</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </header>
    )
}