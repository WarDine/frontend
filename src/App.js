import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Redirect} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Switch } from "react-router-dom";
import ProtectedRoute from 'auth/protected-route';

// views 
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";

// layouts

import Admin from "layouts/Admin.js";
import MainAdmin from "layouts/MainAdmin";
import User from "layouts/User";

const App = () => {

        return (
            (
                <BrowserRouter>
                <Switch>
                    {/* add routes with layouts */}
                    <ProtectedRoute path="/admin" component={Admin} />
                    <ProtectedRoute path="/mainadmin" component={MainAdmin} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/user" component={User} />
                    {/* add routes without layouts */}
                    <Route path="/" exact component={Landing} />
                    {/* <Route path="/" exact component={Index} /> */}
                    {/* add redirect for first page */}
                    <Redirect from="*" to="/" />
                </Switch>
                </BrowserRouter>
           )
        );
}

export default App;
