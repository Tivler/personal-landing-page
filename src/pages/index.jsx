import React, { Component } from 'react';
import Nav from '../components/core/Nav';
import About from '../components/feature/About';

class Index extends Component {
    render () {
        return (
            <>
                <Nav />
                <About />
            </>
        )
    }
}

export default Index;