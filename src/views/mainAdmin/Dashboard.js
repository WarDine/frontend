import React from "react";

// components

import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <CardPageVisits />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">

          <div className="w-full px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </>
    );
  }
}

