import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ error }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (error) {
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [error]);

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
      className="position-fixed"
      variant={error.status === 400 ? "warning" : "danger"}
      onClose={() => setShow(false)}
      dismissible
    >
      <p>
        {error?.status === 400
          ? error?.data?.errors[0]?.msg
          : error?.data?.message}
      </p>
    </Alert>
  );
};

export default ErrorMessage;
