import React, { Component } from 'react';
import NavigationItem from './Navitem/NavItem'
import classes from './NavBar.module.css'
import Auxi from '../../hoc/Auxi';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
class NavBar extends Component {

    componentDidMount() {
        this.props.onScreenResize();
        window.addEventListener('resize', this.props.onScreenResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.props.onScreenResize);
    }
    handleClick() {
        document.getElementById("mobileMenu").classList.toggle(classes.mobileMenuActive);
        document.getElementById("menuToggleIcon").classList.toggle(classes.open);
        document.getElementById("darkBG").classList.toggle(classes.activeBG);
    }
    render() {
        let prevScrollpos = window.pageYOffset;
        if (this.props.width >= 768) {
            window.onscroll = function () {
                console.log(window.pageYOffset);
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
        }


        if (this.props.width < 768) {
            return (
                <Auxi>
                    <ul className={classes.NavBar} id="NavBar" >

                        <div className={classes.navIconCont}><div className={classes.navIcon4}
                            id="menuToggleIcon"
                            onClick={this.handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div></div>
                        <div className={classes.niewiem}><a href="/">KOPYTKO</a></div>
                        <div className={classes.navIconCont}>
                            <span className={classes.langPicker} onClick={() => console.log("Language Change Clicked")}>EN</span>
                        </div>
                    </ul>

                    <div className={classes.mobileMenu} id="mobileMenu">

                        <ul>
                            <NavigationItem onClick={this.handleClick} link="/" active>Home</NavigationItem>
                            <NavigationItem onClick={this.handleClick} link="/reservations" active>Zarezerwuj stolik</NavigationItem>
                            <NavigationItem onClick={this.handleClick} link="/ourstory" active>Nasza historia</NavigationItem>
                            <NavigationItem onClick={this.handleClick} link="/menu" active>Menu</NavigationItem>
                            <NavigationItem onClick={this.handleClick} link="/orderonline" active>Zamów do domu!</NavigationItem>
                            <NavigationItem onClick={this.handleClick} link="/faq" active>Jakieś pytania?</NavigationItem>
                        </ul>

                        <div className={classes.bar}></div>
                    </div>
                    <div className={classes.mobileMenuBackgroud} id="darkBG"></div>
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