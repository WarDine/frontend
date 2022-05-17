import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { authSettings } from "./configs/AuthSettings";
import Router from "./utils/Routing";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// import Index from "views/Index.js";

ReactDOM.render(
    <Auth0Provider
      domain={authSettings.domain}
      clientId={authSettings.clientId}
      redirectUri={window.location.origin}
      audience={authSettings.audience}
    >
      <Router />
    </Auth0Provider>,
  document.getElementById("root")
);
