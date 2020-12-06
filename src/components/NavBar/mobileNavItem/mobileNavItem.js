import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './mobileNavItem.module.css'
const mobileNavigationItem = (props) => (
    <li className={classes.mobileNavItem}>
        <NavLink className={classes.mobileNavlink} exact to={props.link}>
            {props.children}
        </NavLink>
    </li>
)

export default mobileNavigationItem;