import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import HeaderAdmin from "components/Headers/HeaderAdmin.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";

export default function Admin() {
  return (
    <>
      <div className="relative bg-blueGray-100">
      <HeaderAdmin />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
