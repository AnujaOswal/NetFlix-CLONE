import React from "react";
import { Animated } from "react-animated-css";
import { useSelector ,useDispatch} from "react-redux";
import { selectUser, selectRole, logout } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
// import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";


const ProfileScreen = () => {
   const user = useSelector(selectUser);
  const userSubscriptionRole = useSelector(selectRole);
  const dispatch = useDispatch();
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <Animated
          animationIn="slideInLeft"
          animationInDelay={140}
          isVisible={true}
        >
          <h1>Edit Profile</h1>
        </Animated>
        <Animated animationIn="slideInDown" isVisible={true}>
          <div className="profileScreen__info">
            <img
              src="http://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
              alt="User Avatar"
            />
            <div className="profileScreen__details">
              <h2>{user.email}</h2>
              <div className="profileScreen__plans">
                {/* <h3>
                  {userSubscriptionRole
                    ? `Plans: (Current Plan: ${userSubscriptionRole?.subscriptionRole})`
                    : `Plans`}
                </h3> */}
                {/* <PlansScreen /> */}
                <button
                  onClick={() => dispatch(logout())}
                  className="profileScreen__signOut"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  
  );
};

export default ProfileScreen;