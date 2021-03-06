import React from "react";
import "./CompatibilityScreen.css";
import ComputerIcon from "@material-ui/icons/Computer";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import TabletIcon from "@material-ui/icons/Tablet";
import TabletMacIcon from "@material-ui/icons/TabletMac";

const CompatibilityScreen = () => {
  return (
    <div className="compatibilityScreen">
      <div className="compatibilityScreen__background">
        <img
          className="compatibilityScreen__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"
          alt="Netflix Logo"
        />
        <div className="compatibilityScreen__gradient" />
      </div>
      <div className="compatibilityScreen__body">
        <div className="compatibilityScreen__glass">
          <form>
            <h1>Incompatible Device</h1>
            <div className="compatibilityScreen__icons">
              <ComputerIcon />
              <PhoneIphoneIcon />
              <TabletIcon />
              <TabletMacIcon />
            </div>
            <h3>
              The current device is not compatible with the website yet. The
              site is constantly being improved and perfected. Be sure to follow
              me below!
            </h3>
            <a href="https://www.instagram.com/oswal_anuja/">
              <div className="compatibilityScreen__instagram">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                  alt="Instagram Logo"
                />
                <h3>Anuja Oswal</h3>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/anuja-oswal-783476128/">
              <div className="compatibilityScreen__linkedin">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
                  alt="LinkedIn Logo"
                />
                <h3>Anuja-Oswal</h3>
              </div>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompatibilityScreen;