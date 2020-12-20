import React from 'react';
import ProductListScreen from './components/ProductListScreen';
import ProductDetailScreen from './components/ProductDetailScreen';
import ProductAddScreen from './components/ProductAddScreen';
import CartScreen from './components/CartScreen';
//import './MainApp.css';
import './MainApp2.css';


import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const MainApp = () => {

    return (
        <>
            <Router>
                <div className="mainapp">
                    <div className="sidebar">
                        <Link to="/" className="link1">
                            <h3>Home</h3>
                        </Link>
                        <Link to="/yiga" className="otherlinks">
                            <h3>About</h3>
                        </Link>
                        <Link to="/mark" className="otherlinks">
                            <h3>Content</h3>
                        </Link>
                        <Link to="/gaby" className="otherlinks">
                            <h3>Shoot</h3>
                        </Link>
                    </div>
                    <div className="mainbar">
                        <div className="headersection">
                            Header Portion
                        </div>
                        <div className="mainsection">
                            <Switch>
                                <Route path="/" exact component={ProductListScreen} />
                                <Route path="/product/:id" exact component={ProductDetailScreen} />
                                {/** The question mark below means that the id is optional */}
                                <Route path="/cart/:id?" component={CartScreen} />
                                <Route path="/productAdmin" component={ProductAddScreen} />
                                <Route path="/" render={() => <div>Error 404</div>} />
                            </Switch>
                        </div>
                        <div className="footersection">
                            All Copyrights Reserved!
                        </div>
                    </div>
                    <div className="fix">
                        Fixed
                    </div>
                </div>
            </Router>
        </>
    );
}
export default MainApp;