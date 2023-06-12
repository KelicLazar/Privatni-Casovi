import { useContext } from "react";
import { SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

type Props = {
  close: () => void;
  open: () => void;
  state: boolean;
};

const SideDrawer: React.FC<Props> = ({ close, open, state }) => {
  const authContext = useContext(AuthContext);

  return (
    <SwipeableDrawer
      className="navigation-drawer"
      anchor="left"
      open={state}
      onClose={close}
      onOpen={open}
    >
      {authContext.isLoggedIn ? (
        <>
          <h2>
            <Link to={"/new-subject"}>+ Objavi čas</Link>
          </h2>
          <h2>
            <Link to={"/casovi"}>Pretraži časove</Link>
          </h2>
          <h2>
            {" "}
            <Link to={"/notifications"}>Obaveštenja</Link>
          </h2>
          <h2>Podešavanja</h2>

          <h2 onClick={authContext.logout}>Odjavi se</h2>
        </>
      ) : (
        <>
          <h2>
            <Link to="/casovi">Pretraži časove</Link>
          </h2>
          <h2>
            <Link to={"/auth"}>Prijavi se</Link>
          </h2>
        </>
      )}
    </SwipeableDrawer>
  );
};

export default SideDrawer;
