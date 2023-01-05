import React from "react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f1e8d9",
  borderRadius: "10px",
  color: "#3c6b39",
  boxShadow: 24,
  p: 4,
};

const ModalPortal = ({ children }: { children: ReactNode }) => {
  return createPortal(children, document.getElementById("modal")!);
};

const PaymentModal = ({
  show,
  proceed,
  cancel,
}: {
  show: boolean;
  proceed: () => void;
  cancel: () => void;
}) => {
  return (
    <ModalPortal>
      <Modal
        open={show}
        onClose={cancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div style={{ textAlign: "center" }}>결제하시겠습니까?</div>
          </Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <button onClick={proceed} className="payCheckBtn">
              Yes
            </button>
            <button onClick={cancel} className="payCheckBtn">
              No
            </button>
          </div>
        </Box>
      </Modal>
    </ModalPortal>
  );
};

export default PaymentModal;
