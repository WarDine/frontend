import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

// export default function Admin() {
//   return (
//     <>
//       <Sidebar />
//       <div className="relative md:ml-64 bg-blueGray-100">
//         <AdminNavbar />
//         {/* Header */}
//         <HeaderStats />
//         <div className="px-4 md:px-10 mx-auto w-full -m-24">
//           <Switch>
//             <Route path="/admin/dashboard" exact component={Dashboard} />
//             <Route path="/admin/maps" exact component={Maps} />
//             <Route path="/admin/settings" exact component={Settings} />
//             <Route path="/admin/tables" exact component={Tables} />
//             <Redirect from="/admin" to="/admin/dashboard" />
//           </Switch>
//           <FooterAdmin />
//         </div>
//       </div>
//     </>
//   );
// }

const Admin = () => {
    // const { user, isAuthenticated, isLoading } = useAuth0();
    const {
        isLoading,
        isAuthenticated,
        error,
        user,
        loginWithRedirect,
        logout,
      } = useAuth0();
    
      console.log("Sunt aici\n\n\n\n")
      console.log("isLoading: ", isLoading)
      console.log("isAuthenticated: ", isAuthenticated)
      console.log("error: ", error)
      console.log("user: ", user)
    
    
    console.log(isAuthenticated)
    // if (isLoading) {
    //   return <div>Loading ...</div>;
    // }

    return (
        isAuthenticated && (
        <>
          <Sidebar />
          <div className="relative md:ml-64 bg-blueGray-100">
            <AdminNavbar />
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
              <Switch>
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/maps" exact component={Maps} />
                <Route path="/admin/settings" exact component={Settings} />
                <Route path="/admin/tables" exact component={Tables} />
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
              <FooterAdmin />
            </div>
          </div>
        </>
        )
      );
}

export default Admin