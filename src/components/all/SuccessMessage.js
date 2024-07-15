import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const SuccessMessage = ({ message }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (message) {
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message]);

  if (!show) return null;

  return (
    <Alert
      style={{
        zIndex: "1000",
        direction: "ltr",
        top: "20px",
        right: "20px",
        maxWidth: "calc(100% - 24px)",
      }}
      className="position-absolute "
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Success!</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

export default SuccessMessage;
