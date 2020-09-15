import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi'
import classes from './MainPage.module.css'
class MainPage extends Component {
    render() {
        return (
            <Auxi >
                {/* opener */}
                <section >
                    <div className={classes.Left}>
                        <h1>
                            KOPYTKO
                        </h1>
                        <p>Ciepła, polska i rodzinna restauracja!</p>
                        <a className={classes.buttonMainPage}>Zobacz Menu</a>
                    </div>
                    <div className={classes.Right}>

                    </div>
                </section>
                {/* jakas babcia jako szef */}
                {/* <section>
                    <div>
                        <img href="/" />
                    </div>
                    <div>
                        <p>Tytuł klocka</p>
                        <p>lorem ipsum dolor sit amet</p>
                    </div>
                </section> */}
                {/* pare zdjec i godziny otwarcia */}
                {/* <section>
                </section> */}
                {/* pytania */}
                {/* <section>
                    <h2>Jakieś pytania?</h2>
                </section> */}
                {/* mapa */}
                {/* <section>
                    <h2>mapa</h2>
                </section> */}
                {/* footer */}
                {/* <footer>
                    <h2>footer</h2>
                </footer> */}

            </Auxi>
        )
    }
}

export default MainPage;