import React from 'react';
import Navigation from "./Navigation"

class Header extends React.Component {

    render() {
        return <header>
            <h1>типо LASTPASS</h1>
            <Navigation navigationArr={this.props.navigationArr} />
        </header>
    }
}

export default Header;