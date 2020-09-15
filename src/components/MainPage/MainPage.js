import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi'
import classes from './MainPage.module.css'
import babka from '../../assets/babka.jpg'
import grochowka from '../../assets/grochowka.webp'
import murzynek from '../../assets/murzynek.jpg'
import zurek from '../../assets/zurek.jpg'

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
                        <div className={classes.topleft}>
                            {/* <img src={babka} alt="babka ciasto" /> */}
                        </div>
                        <div className={classes.topright}>
                            {/* <img src={grochowka} alt="babka ciasto" /> */}
                        </div>
                        <div className={classes.botleft}>
                            {/* <img src={murzynek} alt="babka ciasto" /> */}
                        </div>
                        <div className={classes.botright}>
                            {/* <img src={zurek} alt="babka ciasto" /> */}
                        </div>
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