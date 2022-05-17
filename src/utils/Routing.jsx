import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Switch } from "react-router-dom";
import Admin from "layouts/Admin";
import Auth from "layouts/Auth";
import Landing from "views/Landing";
import Profile from "views/Profile";
import { Redirect } from "react-router-dom";

const Router = () => {
  // const { isAuthenticated, loginWithRedirect } = useAuth0();
  // const { isAuthenticated, loginWithRedirect } = useAuth0();

return (
  (
      <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        {/* <Route path="/" exact component={Index} /> */}
        {/* add redirect for first page */}
        <Redirect from="*" to="/auth" />
      </Switch>
    </BrowserRouter>
  )
);
  // if (isAuthenticated) {
  //   return (
  //     (
  //         <BrowserRouter>
  //         <Switch>
  //           {/* add routes with layouts */}
  //           <Route path="/admin" component={Admin} />
  //           {/* <Route path="/auth" component={Auth} /> */}
  //           {/* add routes without layouts */}
  //           <Route path="/" exact component={Landing} />
  //           <Route path="/profile" exact component={Profile} />
  //           {/* <Route path="/" exact component={Index} /> */}
  //           {/* add redirect for first page */}
  //           <Redirect from="*" to="/" />
  //         </Switch>
  //       </BrowserRouter>
  //     )
  //   );
  // } else {
  //   return (
  //     (
  //         <BrowserRouter>
  //         <Switch>
  //           {/* add routes with layouts */}
  //           <Route path="/auth" component={Auth} />
  //           {/* add routes without layouts */}
  //           <Route path="/" exact component={Landing} />
  //           {/* <Route path="/" exact component={Index} /> */}
  //           {/* add redirect for first page */}
  //           <Redirect from="*" to="/" />
  //         </Switch>
  //       </BrowserRouter>
  //     )
  //   );
  // }

};

export default Router;

// const Router = () => {
//   const { isAuthenticated, loginWithRedirect } = useAuth0();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       loginWithRedirect();
//     }
//   }, [isAuthenticated, loginWithRedirect]);

//   return (
//     isAuthenticated && (
//         <BrowserRouter>
//         <Switch>
//           {/* add routes with layouts */}
//           <Route path="/admin" component={Admin} />
//           <Route path="/auth" component={Auth} />
//           {/* add routes without layouts */}
//           <Route path="/" exact component={Landing} />
//           <Route path="/profile" exact component={Profile} />
//           {/* <Route path="/" exact component={Index} /> */}
//           {/* add redirect for first page */}
//           <Redirect from="*" to="/" />
//         </Switch>
//       </BrowserRouter>
//     )
//   );
// };

// export default Router;
