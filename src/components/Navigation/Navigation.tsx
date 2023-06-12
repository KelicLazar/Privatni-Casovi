import { useState, useContext } from "react";
import Button from "../FormElements/Button";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";

import { AuthContext } from "../context/auth-context";
import AvatarMenu from "./AvatarMenu";
const Navigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const authContext = useContext(AuthContext);

  const openDrawerHandler = () => {
    setOpenDrawer(true);
  };

  const closeDrawerHandler = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="navigation">
      <Button onClick={openDrawerHandler} className="navigation-manu-btn">
        <span></span>
        <span></span>
        <span></span>
      </Button>

      <SideDrawer
        close={closeDrawerHandler}
        open={openDrawerHandler}
        state={openDrawer}
      />

      <Link to="/">
        <h1 className="logo">
          <i className="uil uil-graduation-cap"></i> Privatni časovi
        </h1>
      </Link>

      <div className="actions-container">
        <Button className="search" to="/casovi">
          Pretraži časove
        </Button>

        {authContext.isLoggedIn ? (
          <AvatarMenu />
        ) : (
          <Button className="auth" to="/auth">
            Prijavi se
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
