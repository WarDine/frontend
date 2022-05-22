import React from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";

export default class AddMessHallForm extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <CardSettings />
          </div>
        </div>
      </>
    );
  }
}

