import React, {Component} from 'react'

import TextField from '@material-ui/core/TextField';
import searchIcon from '../search_Icon.png'
import mainIcon from '../main_logo.png'
import customerSupport from '../customer-care2.svg';
import signIn from '../sign-in2.svg';
import cart from '../cart.svg';
import {Link, NavLink} from 'react-router-dom';

class HeaderTabs extends Component {

  render(){
      return (
        <div className="topnav">
        <NavLink activeClassName="active" to="/visiting-card">Visiting Card</NavLink>
        <NavLink activeClassName="active" to="/letter-head" onClick ={this.changeActive}>Letter Head</NavLink>
        <NavLink activeClassName="active" to="/print">13x19 Printout</NavLink>
        <NavLink activeClassName="active" to="/flex">Flex Banner</NavLink>
        <NavLink activeClassName="active" to="/standees">Standees</NavLink>
        <NavLink activeClassName="active" to="/designwork">Designing work</NavLink>
        
      </div> 
      )
  }
}
export default HeaderTabs;