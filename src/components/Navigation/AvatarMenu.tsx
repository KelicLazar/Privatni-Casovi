import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, useContext } from "react";
import { avatarMenuStyles } from "../../utils/customStyles";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const AvatarMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const authContext = useContext(AuthContext);

  const openMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="avatar-container" onClick={openMenuHandler}>
        <Avatar className="avatar-img" src="badi.jpg"></Avatar>
        <h2>
          {authContext.userData?.name} {authContext.userData?.lastName}
        </h2>
      </div>
      <Menu
        className="avatar-menu"
        anchorEl={anchorEl}
        id="account-menu"
        open={!!anchorEl}
        onClose={openMenuHandler}
        onClick={closeMenuHandler}
        slotProps={{ paper: avatarMenuStyles }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Link to="/new-subject">+ Objavi čas</Link>
        </MenuItem>

        <MenuItem>
          <Link to="/notifications">Obaveštenja</Link>
        </MenuItem>
        <MenuItem>Podešavanja</MenuItem>

        <Divider />
        <MenuItem onClick={authContext.logout}>Odjavi se</MenuItem>
      </Menu>
    </>
  );
};

export default AvatarMenu;
