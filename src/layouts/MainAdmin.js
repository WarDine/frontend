import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import MainAdminNavbar from "components/Navbars/MainAdminNavbar.js";

// views
import Dashboard from "views/mainAdmin/Dashboard.js";

export default function MainAdmin() {
  return (
    <>
      <MainAdminNavbar></MainAdminNavbar>
      <div className="relative bg-blueGray-100">
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/mainadmin/dashboard" exact component={Dashboard} />
            <Redirect from="/mainadmin" to="/mainadmin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
