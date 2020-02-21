import React from 'react';

class PasswordForm extends React.Component {
    render() {
        return <form className="">
            <p className="">Заголовок записи</p>
            <input name="title" type="text" className="" defaultValue={this.props.passwordInfo.title} />
            <p className="">Краткое описание</p>
            <input name="description" type="text" className="" defaultValue={this.props.passwordInfo.description} />
            <p className="">Логин (если есть)</p>
            <input name="login" type="text" className="" defaultValue={this.props.passwordInfo.login} />
            <p className="">Email (если есть)</p>
            <input name="email" type="text" className="" defaultValue={this.props.passwordInfo.email} />
            <p className="">Пароль</p>
            <input name="password" type="text" className="" defaultValue={this.props.passwordInfo.password} />
            <p className="">Дополнительная информация</p>
            <textarea name="additional_information" defaultValue={this.props.passwordInfo.additionalInformation}></textarea>
            <input type="submit" className="" value="Готово" />
        </form>
    }
}

PasswordForm.defaultProps = {
    passwordInfo: {
        title: "",
        description: "",
        login: "",
        email: "",
        password: "",
        additionalInformation: ""
    }
}

export default PasswordForm;