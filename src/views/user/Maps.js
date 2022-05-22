import React from "react";

// components

import MapUser from "components/Maps/MapUser.js";
import CardPageVisitsUser from "components/Cards/CardPageVisitsUser.js";

export default class UserMaps extends React.Component {

  render() {
    return (
      <>
        <div class="flex justify-center items-center h-screen">
          <div className="w-full lg:w-8/12 xl:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <MapUser />
            </div>
          </div>
          <div className="w-full lg:w-8/12 xl:w-6/12 px-4" style={{ height: "60%", overflow: "scroll" }} >
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <CardPageVisitsUser />
            </div>
          </div>
        </div>
      </>
    );
  }
}
