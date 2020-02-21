import React from 'react';
import {passwordsAddData} from '../Actions/addPassword'
import PasswordForm from './PasswordForm';

class AddPassword extends React.Component {
    constructor(props) {
        super(props);
        this._fetchAdd = this._fetchAdd.bind(this);
        this._form = null;
        this._submitHandler = this._submitHandler.bind(this);
    }

    _fetchAdd(url, password) {
        passwordsAddData(url, password);
    }

    _submitHandler(event) {
        event.preventDefault();
        var date = Date.now();
        var object = {
            title: this._form.title.value,
            description: this._form.description.value,
            login: this._form.login.value,
            email: this._form.email.value,
            password: this._form.password.value,
            additionalInformation: this._form.additional_information.value, 
            creationDate: date
        }
        this._fetchAdd("/api/passwords/add", object)
    }

    componentDidMount() {
        this._form = document.querySelector("form");
        if(!this._form) console.log(`Error: add password form was not found!\n
        This error happend in AddPassword element!`)
        else this._form.addEventListener('submit', this._submitHandler);
    }

    render() {
        return <div className="">
            <h2 className="">Добавить новый пароль</h2>
            <PasswordForm />
        </div>
    }
}

export default AddPassword;