import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { passwordsFetchData } from '../Actions/passwords'
import { passwordsDeleteData } from "../Actions/deletePassword.js"
import EditPassword from './EditPassword';

class AllPasswords extends React.Component {
    constructor(props) {
        super(props);
        this._buttonEditHandler = this._buttonEditHandler.bind(this);
        this._renderEditElement = this._renderEditElement.bind(this);
        this._buttonDeleteHandler = this._buttonDeleteHandler.bind(this);
        this._findPasswordById = this._findPasswordById.bind(this);
        this.currentPasswordId = null;
    }
    componentDidMount() {
        this.props.fetchData("/api/passwords/all");
    }
    _buttonDeleteHandler(event) {
        passwordsDeleteData("/api/passwords/delete/" + event.target.parentElement.getAttribute("data"));
        this.props.fetchData("/api/passwords/all");
    }
    _buttonEditHandler(event) {
        this._renderEditElement(event.target.parentElement.getAttribute("data"))
    }
    _findPasswordById(element) {
        if (this.currentPasswordId) 
            if (element._id === this.currentPasswordId) return true;
        else return false;
    }
    closeButtonHandler() {
        ReactDOM.unmountComponentAtNode(document.querySelector('.wrapper'));
    }
    _renderEditElement(id) {
        this.currentPasswordId = id;
        ReactDOM.render(<EditPassword passwordInfo={this.props.passwords.find(this._findPasswordById)} closeButtonHandler={this.closeButtonHandler} />, document.querySelector(".wrapper"));
    }
    render() {
        return <div><h2>Главная страница, где отображаются все пароли</h2>
            <ul>
                {
                    this.props.passwords.map((value, index) => {
                        return <li className="" key={index} data={value._id}>
                            <div className="">{value.title}</div>
                            <div className="">{value.description}</div>
                            <div className="">{value.login}</div>
                            <div className="">{value.email}</div>
                            <div className="">{value.password}</div>
                            <div className="">{value.additionalInformation}</div>
                            <div className="">{value.creationDate}</div>
                            <button className="" onClick={this._buttonDeleteHandler}>Удалить</button>
                            <button className="" onClick={this._buttonEditHandler}>Edit</button>
                        </li>
                    })
                }
            </ul>
            <div className="wrapper"></div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        passwords: state.passwords
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => {dispatch(passwordsFetchData(url))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPasswords)
