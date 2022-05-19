import React from "react";

// components
import AddDeleteTableRows from "components/Tables/AddDeleteTableRows.js";
import CardRecipeInfo from "components/Cards/CardRecipeInfo.js";

export default function Dashboard() {
  return (
    <>
      <CardRecipeInfo></CardRecipeInfo>

      <div class="flex justify-center items-center h-screen">
        <div className="w-full lg:w-8/12 xl:w-6/12 px-4" style={{ height: "60%", overflow: "scroll" }} >
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <AddDeleteTableRows />
          </div>
        </div>
        <div className="w-full lg:w-8/12 xl:w-6/12 px-4" style={{ height: "60%", overflow: "scroll" }} >
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <AddDeleteTableRows />
          </div>
        </div>
      </div>
    </>
  );
}
