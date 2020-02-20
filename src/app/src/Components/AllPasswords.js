import React from 'react';
import { connect } from 'react-redux';
import { passwordsFetchData } from '../Actions/passwords'

class AllPasswords extends React.Component {
    componentDidMount() {
        this.props.fetchData("http://localhost:4000/api/passwords/all")
    }
    render() {
        return <div><h2>Главная страница, где отображаются все пароли</h2>
            <ul>
                {
                    this.props.passwords.map((value, index) => {
                        return <li key={index}>
                            <div className="">{value.title}</div>
                            <div className="">{value.description}</div>
                            <div className="">{value.login}</div>
                            <div className="">{value.email}</div>
                            <div className="">{value.password}</div>
                            <div className="">{value.additionalInformation}</div>
                            <div className="">{value.creationDate}</div>
                        </li>
                    })
                }
            </ul>
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
