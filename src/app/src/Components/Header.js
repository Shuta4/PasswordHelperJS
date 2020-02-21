import React from 'react';
import ReactDOM from 'react-dom';
import AddPassword from './AddPassword';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.closeButtonHandler = this.closeButtonHandler.bind(this);
        this._buttonAddPasswordHandler = this._buttonAddPasswordHandler.bind(this);
    }
    _buttonAddPasswordHandler() {
        ReactDOM.render(<AddPassword closeButtonHandler={this.closeButtonHandler} />, document.querySelector('.wrapper'));
    }
    closeButtonHandler() {
        ReactDOM.unmountComponentAtNode(document.querySelector('.wrapper'));
    }
    render() {
        return <header>
            <h1>типо LASTPASS</h1>
            <button className="" onClick={this._buttonAddPasswordHandler}>Добавить новый пароль</button>
        </header>
    }
}

export default Header;