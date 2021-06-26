import React,{ useRef } from 'react'
import './SignupScreen.css'
import {auth} from '../firebase'
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from 'firebase'
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';

const SignupScreen=()=> {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();

    const uiConfig = {
      signInFlow: "popup",
     // signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    };
  

    const register = (e) => {
        e.preventDefault();
        auth
          .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          ).then((authUser)=>{
            console.log(authUser);
          })
          .catch((e) => alert(e.message));
      };

      const signIn = (e) => {
        e.preventDefault();
        auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          ).then((authUser)=>{
            dispatch(
              login({
                  uid: authUser.uid,
                 email: authUser.email,
               })
             );
          })
          .catch((e) => alert(e.message));
      };
      
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign up</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>
                {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} /> */}
              <h4>
                  
                 <span className="signupScreen__gray"> New to Netflix? </span>{" "}
                 <span className="signupScreen__link" onClick={register}>Sign up now.</span>
            
            </h4>
            </form>
            
        </div>
    );
};

export default SignupScreen;
