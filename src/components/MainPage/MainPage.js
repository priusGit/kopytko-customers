import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi'
import { connect } from 'react-redux';
import classes from './MainPage.module.css'
class MainPage extends Component {
    // componentDidMount() {
    //     this.props.onScreenResize();
    //     window.addEventListener('resize', this.props.onScreenResize);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.props.onScreenResize);
    // }
    render() {
        if (this.props.width < 768) {
            return (
                <Auxi >
                    <section className={classes.MainPage}>
                        <div className={classes.Left}>
                            <div className={classes.mobileMain}>
                                <h1>MOBILNIAK</h1>
                                <p>Rodzinnie i cieple - po polsku!</p>
                                <a className={classes.buttonMainPage} href="/menu">Zobacz Menu</a>
                            </div>
                        </div>
                    </section>
                </Auxi>
            )
        }
        else {
            return (
                <Auxi >
                    <section className={classes.MainPage}>
                        <div className={classes.Left}>
                            <div className={classes.leftContent}>
                                <h1>{this.props.width}</h1>
                                <p>Rodzinnie i cieple - po polsku!</p>
                                <a className={classes.buttonMainPage} href="/menu">Zobacz Menu</a>
                            </div>
                        </div>
                        <div className={classes.Right}>
                            <div className={classes.topleft}>
                            </div>
                            <div className={classes.topright}>
                            </div>
                            <div className={classes.botleft}>
                            </div>
                            <div className={classes.botright}>
                            </div>
                        </div>
                    </section>
                </Auxi>
            )
        }


    }
}
const mapStateToProps = state => {
    return {
        width: state.windowWidth
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onScreenResize: () => dispatch(actions.onScreenResize())
//     };
// };

export default connect(mapStateToProps, null)(MainPage);