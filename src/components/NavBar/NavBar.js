import React, { Component } from 'react';
import NavigationItem from './Navitem/NavItem'
import classes from './NavBar.module.css'
import Auxi from '../../hoc/Auxi';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
class NavBar extends Component {

    componentDidMount() {
        this.props.onScreenResize();
        window.addEventListener('resize', this.props.onScreenResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.onScreenResize);
    }
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

        if (this.props.width < 768) {
            return (
                <Auxi>
                    <ul className={classes.NavBar} id="NavBar">
                        <FontAwesomeIcon className={classes.Bars} icon={faBars} onClick={() => console.log("Bars Clicked")} />
                        <NavigationItem link="/" active>Home</NavigationItem>
                        <span onClick={() => console.log("Language Change Clicked")}>EN</span>
                    </ul>
                    <ul className={classes.MobileBotBar} id="BotNavBar">
                        NO POKAZ SIE
                    </ul>
                </Auxi>

            )
        }
        else {
            return (
                <Auxi>
                    <ul className={classes.NavBar} id="NavBar">
                        <NavigationItem link="/" active>Home</NavigationItem>
                        <NavigationItem link="/reservations" active>Zarezerwuj stolik</NavigationItem>
                        <NavigationItem link="/ourstory" active>Nasza historia</NavigationItem>
                        <NavigationItem link="/menu" active>Menu</NavigationItem>
                        <NavigationItem link="/orderonline" active>Zamów do domu!</NavigationItem>
                        <NavigationItem link="/faq" active>Jakieś pytania?</NavigationItem>
                        {/* <NavigationItem link="/checkout" active>Kasa</NavigationItem> */}
                    </ul>
                </Auxi>

            )
        }

    }
};
const mapStateToProps = state => {
    return {
        width: state.windowWidth,
        lang: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onScreenResize: () => dispatch(actions.onScreenResize())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);