import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

export default class Footer extends Component{
    render() {
        return(
            <Navbar className='footer' fixed='bottom' expand="lg" variant="dark" bg="dark">
                <Navbar.Brand><small>Created by <a href="https://github.com/galatoide">Wilson Cruz</a></small></Navbar.Brand>
            </Navbar>
        )
    }
}