import React from "react";
import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Box from "@mui/material/Box";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
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

const AlertModal = ({ show }: { show: boolean }) => {
  return (
    <ModalPortal>
      <Modal
        open={show}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h1">
            장바구니에 상품이 추가! 🛒
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            장바구니에 해당 상품이 존재할 경우, 수량이 증가.
          </Typography>
        </Box>
      </Modal>
    </ModalPortal>
  );
};

export default AlertModal;
