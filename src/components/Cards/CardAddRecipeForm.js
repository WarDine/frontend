import React from "react";
import axios from 'axios';

const URLmesshall = `http://172.19.0.3:8081`
const URLrecipe = `http://172.19.0.2:8080`

const requestURLAdd = URLrecipe + `/api/recipe/add`
const requestURLInfo = URLmesshall + `/messhallmanager/messhall/info`

var myMesshallUID = ""
var messhallsInfo = [{
  messHallUID: "441f6c93-a712-4d1f-bd2d-fd109b729899",
  street: "",
  city: "",
  country: "",
  menuUID: "",
  status: "",
  attendanceNumber: 0
}]

function submitNewMessHallInfo() {
  let recipeName = document.getElementById("recipeName").value;
  let recipeDescription = document.getElementById("recipeDescription").value;

  let recipePortions = document.getElementById("recipePortions").value;
  let recipeCalories = document.getElementById("recipeCalories").value;
  let recipeTime = document.getElementById("recipeTime").value;

  if (recipeName && recipeDescription && recipePortions && recipeCalories && recipeTime) {

    const data = {
      recipe: {
        messhallUID: myMesshallUID,
        name: recipeName,
        description: recipeDescription,
        calories: recipeCalories,
        cookingTime: recipeTime,
        portions: recipePortions
      },
      recipeIngredients: [{
        ingredientUID: "sal",
        amount: "cf"
      }]
    }

    console.log(data)

    axios.post(
      requestURLAdd, data
    ).then(() => {
    })

    window.location.href = "http://localhost:3000/admin";

  }
}

export default class CardAddRecipeForm extends React.Component {

  componentDidMount() {
    axios.get(requestURLInfo)
      .then(res => {
        messhallsInfo = res.data;
        messhallsInfo.map(a => myMesshallUID = a.messHallUID);
      })
  }

  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">Recipe Details</h6>
              <button
                onClick={submitNewMessHallInfo}
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Description
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      id="recipeName"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Romeo Fantastik"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Description
                    </label>
                    <input
                      id="recipeDescription"
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="romeofantastik@example.com"
                    />
                  </div>
                </div>

              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Cooking Time
              </h6>
              <div className="flex flex-wrap">


                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Portions
                    </label>
                    <input
                      id="recipePortions"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="New York"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Calories
                    </label>
                    <input
                      id="recipeCalories"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="United States"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Cooking Time
                    </label>
                    <input
                      id="recipeTime"
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    // defaultValue="Postal Code"
                    />
                  </div>
                </div>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />

            </form>
          </div>
        </div>
      </>
    );
  }
}
