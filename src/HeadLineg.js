import React, { useState } from 'react';
import { Component } from 'react';
import  { Redirect } from 'react-router-dom';
import './App.css';
import './NavLink.js';  
import Search from './component/Example';
import App1 from './component/App1';
import Appupload3 from './component/appupload3';
import App2 from './component/App2';
import App3 from './component/Appviewonly3';
import Search11 from './component/Search';
import Login from './component/login';
//import Logout from './component/logout';
import Signup from './component/signup';
import Landpage from './component/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink as RRNavLink
} from "react-router-dom";
import Head2 from './signin.js';
//import Example from "./Example";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  //NavbarText,
} from 'reactstrap';

class App extends Component {
 
    
    render() {
        let content;
        if (localStorage.getItem('permito').includes(98)) {
          content = <span>Condition A</span>;
        } else if (localStorage.getItem('permito').includes(97)) {
          content = <span>Condition B</span>;
        } else {
          content = <span>Neither</span>;
        }
      
        return <div>{content}</div>;
      }
}

export default App;





// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
 <App3 />
    </div>
  );
}

function About() {
  return (
    <div>
       
       <Appupload3 />
      <h2>About roy</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
     <App2 />

    </div>
  );
}

function Signupm() {
  return (
    <div>
     <Signup />

    </div>
  );
}

function Loginm() {
  return (
    <div>
     <Login />
     
     
    </div>
  );
  
  
}

const ProtectedComponent = () => {
  if (true)
     return <Redirect to='/login2'  />
 
 return  <Redirect to='/'  />
 }

function Logoutm() {
  localStorage.setItem('accesstoken',{'Authorization':"Token "});
  localStorage.setItem('authcode','');
 
  return (
    <div>
    you have logged out, Login <a href='/books-app'>here </a>again.
    <div>
    
   Thank you to web surf here. This is the logout page content for guests!
   
    </div>
    </div>
  );
 
 
 
}



const style = {
  color: 'blue',
  "a:active": {
    color: 'yellow'
  }
};
