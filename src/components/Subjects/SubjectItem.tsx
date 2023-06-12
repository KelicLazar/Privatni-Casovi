import { Avatar, Button, Collapse, Rating } from "@mui/material";
import Btn from "../FormElements/Button";
import { useState, useContext } from "react";
import { subjectWithCreator } from "../../services/services";
import { AuthContext } from "../context/auth-context";
import Modal from "../UIElements/Modal";

const SubjectItem: React.FC<subjectWithCreator> = ({
  cena,
  grad,
  creatorId,
  opis,
  predmet,
  vremeTrajanja,
  creatorData,
}) => {
  const [showContact, setShowContact] = useState(false);
  const authContext = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);

  const openDeleteModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        close={closeModalHandler}
        title="Da li ste sigurni?"
        description="Da li ste sigurni da želite obrisati ovaj oglas?"
        primaryAction="Obriši"
        secondaryAction="Odustani"
        type="error"
      />
      <div className="subject-item">
        <h5>{predmet}</h5>
        <div className="subject-data">
          <div className="subject-heading">
            <div className="heading-info">
              <div className="price">
                <i className="uil uil-money-bill">{cena}</i>
              </div>
              <div className="time">
                <i className="uil uil-stopwatch">{vremeTrajanja}'</i>
              </div>
              <div className="location">
                <i className="uil uil-map-pin">{grad}</i>
              </div>
            </div>
          </div>
          <p>{opis}</p>
          {creatorId === authContext.userData?.id && (
            <div className="actions">
              <Button
                onClick={openDeleteModalHandler}
                variant="contained"
                color="error"
              >
                Obriši
              </Button>
              <Button variant="outlined" color="warning">
                Izmeni
              </Button>
            </div>
          )}
        </div>
        <hr />
        <div className="user-container">
          <div className="user-data">
            <Avatar src="badi.jpg" />
            <div className="user-info">
              <h3>
                {creatorData?.name} {creatorData?.lastName}
              </h3>
              <Rating
                size="small"
                readOnly
                value={5}
                name="simple-controlled"
              />
            </div>
          </div>
          <div className="user-actions">
            <Btn
              onClick={() => {
                setShowContact((prev) => !prev);
              }}
              disabled={
                !authContext.isLoggedIn ||
                authContext.userData?.id === creatorData?.id
              }
            >
              Zakaži čas
            </Btn>
            <Collapse in={showContact} orientation="horizontal">
              <a href={`tel:${creatorData?.phone}`}>
                <i className="uil uil-phone"></i>
                {creatorData?.phone}
              </a>
            </Collapse>
            <Collapse in={showContact} orientation="horizontal">
              <a href={`mailto:${creatorData?.email}`}>
                <i className="uil uil-envelope"></i>
                {creatorData?.email}
              </a>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectItem;
