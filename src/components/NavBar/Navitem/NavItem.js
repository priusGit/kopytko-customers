import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavItem.module.css'
const navigationItem = (props) => (
    <li className={classes.NavItem}>
        <NavLink className={classes.navlink} activeClassName={classes.navlinkActive} exact to={props.link}>
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem;