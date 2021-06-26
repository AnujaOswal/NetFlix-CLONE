import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectUser} from './features/userSlice';
import {auth} from './firebase';

import ProfileScreen from './screens/ProfileScreen';
import { login, selectRole } from "./features/userSlice";
import { isMobile } from "react-device-detect";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";
import CompatibilityScreen from "./screens/CompatibilityScreen";

function App() {
 
  const loading=false;
 const user=useSelector(selectUser);
 
  const dispatch = useDispatch();
   useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
         login({
             uid: userAuth.uid,
            email: userAuth.email,
          })
        );
  //       console.log(userAuth);
      } else {
         dispatch(logout());
  //       //logout
      }
    });
     return unsubscribe;
   }, [dispatch]);
  if (loading) {
    return (
      <div className="app__loading">
        <div className="app__loadingContents">
          <img
            src="https://pngimg.com/uploads/netflix/netflix_PNG15.png"
            alt="Netflix Logo"
          />
          <Spinner name="ball-spin-fade-loader" color="#e50914" fadeIn="none" />
        </div>
      </div>
    );
  }

  return (
    <div className="app">
    {isMobile ? (
        <CompatibilityScreen />
      ) : (
    <Router>
      {!user ?(
        <LoginScreen/>
      ):(
      <Switch>
        <Route path="/profile">
          <ProfileScreen/>
        </Route>
        <Route exact path="/">
        <HomeScreen/>
        </Route>

      </Switch>
      )}

        
    </Router>
      )}
    </div>
  );
}

export default App;
