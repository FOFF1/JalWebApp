import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  let options = { redirectUri: window.location.origin + "/products" };
  return (
    <Button onClick={() => loginWithRedirect(options)}>Hey User, Login?</Button>
  );
};

export default LoginButton;
