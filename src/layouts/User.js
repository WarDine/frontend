import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import HeaderUser from "components/Headers/HeaderUser.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import UserNavbar from "components/Navbars/UserNavbar.js";

// views
import UserMaps from "views/user/Maps.js";

export default function User() {
  return (
    <>
      {/* <UserNavbar></UserNavbar> */}
      <div className="relative bg-blueGray-100">
        <HeaderUser />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/user/maps" exact component={UserMaps} />
            <Redirect from="/user" to="/user/maps" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
