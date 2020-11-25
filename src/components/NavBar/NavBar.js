import React, { Component } from 'react';
import NavigationItem from './Navitem/NavItem'
import classes from './NavBar.module.css'

class NavBar extends Component {

    render() {
        let prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            let flag;
            if (document.getElementById("OrderCategories")) {
                flag = true;
            }
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("NavBar").style.top = "0";
                if (flag === true) {
                    document.getElementById("OrderCategories").style.top = "60px";
                }
            } else {
                document.getElementById("NavBar").style.top = "-60px";
                if (flag === true) {
                    document.getElementById("OrderCategories").style.top = "0px";
                }
            }
            prevScrollpos = currentScrollPos;
        }
        return (
            <ul className={classes.NavBar} id="NavBar">
                <NavigationItem link="/" active>Home</NavigationItem>
                <NavigationItem link="/reservations" active>Zarezerwuj stolik</NavigationItem>
                <NavigationItem link="/ourstory" active>Nasza historia</NavigationItem>
                <NavigationItem link="/menu" active>Menu</NavigationItem>
                <NavigationItem link="/orderonline" active>Zamów do domu!</NavigationItem>
                <NavigationItem link="/faq" active>Jakieś pytania?</NavigationItem>
                {/* <NavigationItem link="/checkout" active>Kasa</NavigationItem> */}
            </ul>
        )
    }
};

export default NavBar;