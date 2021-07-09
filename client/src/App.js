import React, {useEffect} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import SignInAndSignOutPage from './pages/signin_and_signout/signin_and_signout_component'
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import { createStructuredSelector} from 'reselect'
import {checkUserSession} from './redux/user/user.action'

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  },[checkUserSession])

return (
  <div>
    <Header/>
    <h1 className="mainTitle">React Ecommerce Website</h1>
    <Switch>
        <Route exact path = "/" component = { HomePage } />
        <Route path = "/shop" component = {ShopPage} />  
        <Route path = "/checkout" component = {CheckoutPage} />                                              
        <Route exact path = "/signin" 
          render = {() => currentUser ? (<Redirect to='/'/>) : ( <SignInAndSignOutPage /> ) } />
    </Switch>
  </div>
);
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
