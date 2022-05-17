import React from "react";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Copyright © {new Date().getFullYear()} WarDine by{" "}
                  <a
                    href="https://github.com/IulianOlaru249"
                    className="text-blueGray-500 hover:text-blueGray-800"
                  >
                    golaru
                  </a>
                  &
                  <a
                    href="https://github.com/filimonadrian"
                    className="text-blueGray-500 hover:text-blueGray-800"
                  >
                    afilimon
                  </a>
                  .
                </div>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
}
