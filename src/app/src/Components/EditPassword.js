import React from 'react';
import {passwordsEditData} from '../Actions/editPassword' 
import PasswordForm from './PasswordForm';

class EditPassword extends React.Component {
    constructor(props) {
        super(props);
        this._fetchEdit = this._fetchEdit.bind(this);
        this._form = null;
        this._submitHandler = this._submitHandler.bind(this);
    }

    _fetchEdit(url, password) {
        passwordsEditData(url, password);
    }

    _submitHandler(event) {
        event.preventDefault();
        var object = {
            title: this._form.title.value,
            description: this._form.description.value,
            login: this._form.login.value,
            email: this._form.email.value,
            password: this._form.password.value,
            additionalInformation: this._form.additional_information.value
        }
        this._fetchEdit("/api/passwords/update/" + this.props.passwordInfo._id, object);
        window.location.reload();
    }

    componentDidMount() {
        this._form = document.querySelector("form");
        if(!this._form) console.log(`Error: edit password form was not found!\n
        This error happend in EditPassword element!`)
        else this._form.addEventListener('submit', this._submitHandler);
    }

    render() {
        return <div className="">
            <h2 className="">Добавить новый пароль</h2>
            <PasswordForm passwordInfo={this.props.passwordInfo} />
        </div>
    }
}

export default EditPassword;