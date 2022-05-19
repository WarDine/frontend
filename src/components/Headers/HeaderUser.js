import React from "react";

// components

import backgroung_image from "assets/img/messHall.jpg";

// function callbackAddMessHall() {
//   console.log("Here")
// }

// function callbackRemoveMessHall() {
//   console.log("Here2")
// }

// function callbackUpdateMessHall() {
//   console.log("Here3")
// }

export default function HeaderUser() {
  
  return (
    <>
      {/* Header */}
      <div className="relative bg-black md:pt-16 pb-16 pt-6"
                 style={{
                  backgroundImage:
                  `url(${backgroung_image})`,
                }}
      >
      </div>
    </>
  );
}
