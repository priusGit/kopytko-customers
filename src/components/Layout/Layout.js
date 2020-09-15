import React, { Component } from 'react';
import AsideIconBar from '../AsideIconBar/AsideIconBar'
import NavBar from '../NavBar/NavBar'
import Auxi from '../../hoc/Auxi'
import classes from './Layout.module.css'
class Layout extends Component {
    render() {
        return (
            <Auxi >
                <NavBar />
                <AsideIconBar />
                <main>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}

export default Layout;