import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import Maps from "views/user/Maps.js";

export default function User() {
  return (
    <>
      <div className="relative bg-blueGray-100">
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/user/maps" exact component={Maps} />
            <Redirect from="/user" to="/user/maps" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
