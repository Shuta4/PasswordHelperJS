import React from 'react';
import './App.css';
import {createBrowserHistory} from 'history'
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer.js";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AllPasswords from './Components/AllPasswords'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory();
        this.store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
    }

    render() {
        return <Provider store={this.store}>
            <div className="page">
                <Header />
                <AllPasswords />
                <Footer />
            </div>
        </Provider>
    }
}
export default App;
