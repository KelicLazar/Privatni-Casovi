import { Button } from "@mui/material";
import Story from "../components/Story/Story";
import Navigation from "../components/Navigation/Navigation";
import Modal from "../components/UIElements/Modal";
import { useState } from "react";

const Notifications = () => {
  const [openModal, setOpenModal] = useState(false);
  const openRateModalHandler = () => {
    setOpenModal(true);
  };
  const closeRateModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <Story>
      <Modal
        close={closeRateModalHandler}
        open={openModal}
        onClose={closeRateModalHandler}
        primaryAction="Oceni"
        secondaryAction="Odustani"
        title="Ocenite korisnika."
        description={null}
        rate
      />
      <Navigation />
      <div className="notification-container">
        <div className="notification-item">
          <h4>Oceni korisnika Lazar</h4>
          <p>
            Sada imate mogućnost da ocenite nastavnika i pomognete drugim
            korisnicima da pronađu najboljeg nastavnika za njihove potrebe.
          </p>
          <div className="actions">
            <Button variant="contained" className="secondary">
              Odustani
            </Button>
            <Button onClick={openRateModalHandler} variant="contained">
              Oceni
            </Button>
          </div>
        </div>
      </div>
    </Story>
  );
};

export default Notifications;
