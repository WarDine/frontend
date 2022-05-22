import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import backgroung_image from "assets/img/messHall.jpg";

function callbackAddMessHall() {
  window.location.href = "http://localhost:3000/mainadmin/dashboard/addmesshall";
}

function callbackRemoveMessHall() {
  console.log("Here2")
}

function callbackUpdateMessHall() {
  console.log("Here3")
}

export default function HeaderStats() {
  
  return (
    <>
      {/* Header */}
      <div className="relative bg-black md:pt-32 pb-32 pt-12"
                 style={{
                  backgroundImage:
                  `url(${backgroung_image})`,
                }}
      >
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  cardText = "Add New Mess Hall"
                  cardContent= "bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded'"
                  cardCallback = {callbackAddMessHall}
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  cardText = "Remove Mess Hall"
                  cardCallback = {callbackRemoveMessHall}
                  cardContent= "bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded'"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                <CardStats
                  cardText= "Change Mess Hall Status"
                  cardCallback = {callbackUpdateMessHall}
                  cardContent= "bg-lightBlue-500 hover:bg-lightBlue-400 text-white font-bold py-2 px-4 border-b-4 border-lightBlue-700 hover:border-lightBlue-500 rounded'>"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
