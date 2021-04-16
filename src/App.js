import React,{useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import { createStructuredSelector } from 'reselect';
import './App.css';
import Header from './components/header/header.component';
import {checkUserSession} from './redux/user/user.action';

import { connect } from 'react-redux';

import { selectCurrentUser } from './redux/user/user.selector';

const App = ({checkUserSession,currentUser})=> {


  useEffect(()=>{
    checkUserSession( )
  },[checkUserSession])


  return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>  
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render = 
      {() => currentUser ? 
      (<Redirect to ='/' />) 
      : (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps,mapDispatchToProps)(App);

