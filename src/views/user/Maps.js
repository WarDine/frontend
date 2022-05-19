import React from "react";

// components

import MapExample from "components/Maps/MapExample.js";
import MessHallInfoTable from "components/Tables/MessHallInfoTable.js";

export default function Maps() {
  return (
    <>
      <div class="flex justify-center items-center h-screen">
          <div className="w-full lg:w-8/12 xl:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <MapExample />
              </div>
            </div>
            <div className="w-full lg:w-8/12 xl:w-6/12 px-4" style={{ height: "60%", overflow: "scroll" }} >
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <MessHallInfoTable />
              </div>
            </div>
      </div>
    </>
  );
}
