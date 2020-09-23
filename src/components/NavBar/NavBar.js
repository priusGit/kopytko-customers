import React from 'react';
import NavigationItem from './Navitem/NavItem'
import classes from './NavBar.module.css'
const NavBar = (props) => (
    <ul className={classes.NavBar}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/reservations" active>Zarezerwuj stolik</NavigationItem>
        <NavigationItem link="/ourstory" active>Nasza historia</NavigationItem>
        <NavigationItem link="/menu" active>Menu</NavigationItem>
        <NavigationItem link="/orderonline" active>Zamów do domu!</NavigationItem>
        <NavigationItem link="/faq" active>Jakieś pytania?</NavigationItem>

    </ul>
);

export default NavBar;