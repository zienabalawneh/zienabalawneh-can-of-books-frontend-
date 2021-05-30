import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyFavoriteBooks from './MyFavoriteBooks';
import Login from './Login';
import User from './User';

import { withAuth0 } from '@auth0/auth0-react';
class App extends React.Component {

  render() {
    console.log('app', this.props)
    console.log(this.props.auth0.isAuthenticated);
    return(
      <>
        <Router>
        {/* //  <IsLoadingAndError> */}
            <Header />
              <Switch>
                <Route exact path="/">
                {this.props.auth0.isAuthenticated ? <MyFavoriteBooks/> :<Login/>}
                </Route>
                <Route path='/User'>
                <User/>
                </Route>
                
              </Switch>
            <Footer />
      {/* /    </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
