import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirection = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  let redirectUri = window.location.origin + "/payment";
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      onRedirectCallback={onRedirection}
      redirectUri={redirectUri}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithHistory;
