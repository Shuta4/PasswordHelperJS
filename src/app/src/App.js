import React from 'react';
import './App.css';
import {Route, Switch, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer.js";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.history = createBrowserHistory();
        this.store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));
    }

    render() {
        return <Provider store={this.store}>
            <div className="page">
                <Router history={this.history}>
                    <Header navigationArr={this.props.navigationArr}/>
                    <main>
                        <Switch>
                        {
                            this.props.routeArr.map((val, index) => {
                                return <Route key={index} path={val.path} exact={val.exact} component={val.component} />
                            })
                        }
                        </Switch>
                    </main>
                    <Footer />
                </Router>
            </div>
        </Provider>
    }
}
export default App;
