import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi'
import classes from './MainPage.module.css'
class MainPage extends Component {
    render() {
        return (
            <Auxi >
                <section className={classes.MainPage}>
                    <div className={classes.Left}>
                        <h1>
                            KOPYTKO
                        </h1>
                        <p>Ciepła, polska i rodzinna restauracja!</p>
                        <a className={classes.buttonMainPage} href="/">Zobacz Menu</a>
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

export default MainPage;