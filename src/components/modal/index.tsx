/** @jsx jsx */
import React from "react";
import { jsx, Container, Close } from "theme-ui";
import { alpha } from "@theme-ui/color";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  modalRef: any;
}

const Modal: React.FC<Props> = ({
  children,
  modalRef,
  isOpen,
  handleClose,
  ...props
}) => {
  return (
    <>
      <div
        sx={{
          position: "fixed",
          zIndex: isOpen ? 898 : -1,
          inset: 0,
          backgroundColor: alpha("dark", 0.7),
          opacity: isOpen ? 1.0 : 0.0,
          transition: "all 0.3s ease",
        }}
      />
      <Container
        ref={modalRef}
        {...props}
        sx={{
          bg: "background",
          position: "fixed",
          zIndex: isOpen ? 899 : -3,
          inset: 0,
          top: isOpen ? 7 : 0,
          bottom: "auto",
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          maxWidth: 9,
          p: 5,
          height: "max-content",
          transition: "all 0.3s ease",
          opacity: isOpen ? 1.0 : 0.0,
        }}
      >
        <Close
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: -3,
            top: -3,
          }}
        />
        {children}
      </Container>
    </>
  );
};

export default Modal;
