import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import SignInAndSignOutPage from './pages/signin_and_signout/signin_and_signout_component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'

import {selectCurrentUser} from './redux/user/user.selector'
import { createStructuredSelector} from 'reselect'

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount(){
   const  {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
             userRef.onSnapshot(snapShot => {
                setCurrentUser ({
                      id: snapShot.id,
                      ...snapShot.data()
                    })
                  });
                } else {
                setCurrentUser(userAuth);
            }
          })
        }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser} = this.props;
    return (
      <div>
        <Header/>
        <h1 className="mainTitle">React Ecommerce Website</h1>
        <Switch>
           <Route exact path = "/" component = { HomePage } />
           <Route path = "/shop" component = {ShopPage} />  
           <Route path = "/checkout" component = {CheckoutPage} />                                              
           <Route exact path = "/signin" 
                        render = {() => 
                          currentUser ? (
                         <Redirect to='/' />
                         ) : (
                         <SignInAndSignOutPage />
                           )
                         }
                   />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
