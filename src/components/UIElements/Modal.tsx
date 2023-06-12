import {
  Button,
  Modal as MuiModal,
  Rating,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string | null;
  description: string | null;
  close: () => void;
  primaryAction: string;
  secondaryAction?: string;
  type?: string;
  rate?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  description,
  close,
  primaryAction,
  secondaryAction,
  type,
  rate,
}) => {
  const [rating, setRating] = useState<number | null>(0);

  const RateContent = () => {
    return (
      <div className="rating-content">
        <Rating
          size="large"
          value={rating}
          name="simple-controlled"
          onChange={(e, newVal) => {
            console.log(newVal);

            setRating(newVal);
          }}
        />

        <TextareaAutosize minRows={4} placeholder="Dodaj komentar" />
      </div>
    );
  };
  return (
    <MuiModal disableEnforceFocus open={open} onClose={onClose}>
      <div className={`modal-container  ${type}`}>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
        {rate && <RateContent />}

        <div className="modal-actions">
          {secondaryAction && (
            <Button
              variant="outlined"
              color="error"
              className="secondary-action"
              onClick={close}
            >
              {secondaryAction}
            </Button>
          )}
          <Button variant="contained" color="error" onClick={close}>
            {primaryAction}
          </Button>
        </div>
      </div>
    </MuiModal>
  );
};

export default Modal;
