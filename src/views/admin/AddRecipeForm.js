import React from "react";

// components

import CardAddRecipeForm from "components/Cards/CardAddRecipeForm.js";

export default class AddRecipeForm extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full mb-12 xl:mb-0 px-4">
            <CardAddRecipeForm />
          </div>
        </div>
      </>
    );
  }
}

