import React from "react";
import axios from 'axios';

const URLmesshall = `http://172.19.0.3:8081`
const URLrecipe = `http://172.19.0.2:8080`

const requestURLInfoRecipes = URLrecipe + `/api/recipe/get-by-messhall/`  //4ed0c0d0-4408-44a3-90b1-7c3e900e40a6`
const requestURLInfo = URLmesshall + `/messhallmanager/messhall/info`

var myMesshallUID = ""
var messhallsInfo = [{
  messHallUID: "",
  street: "",
  city: "",
  country: "",
  menuUID: "",
  status: "",
  attendanceNumber: 0
}]


// {
//   "recipe": {
//       "messhallUID": "4ed0c0d0-4408-44a3-90b1-7c3e900e40a6",
//       "name":"cuc salbatic in orez de padure2222222",
//       "description":"O ciorba cu legume si carne de balaur de mare",
//       "calories":300,
//       "cookingTime":100,
//       "portions":200

//   },
//   "recipeIngredients":[
//       {
//           "ingredientUID": "e4276916-d30f-480a-9873-3a5325a2f277",
//           "amount": 5
//       },
//       {
//           "ingredientUID": "7feb4337-8e92-4a0b-aae6-0e624648578e",
//           "amount": 2
//       },
//       {
//           "ingredientUID": "6b7fd85c-0d94-42d3-9e5e-dac5172a87fa",
//           "amount": 1
//       }
//   ]
// }

// components
export default class CardRecipeInfo extends React.Component {
  state = {
    messhallsRecipes: [{
      recipeUID: "",
      messhallUID: "",
      name: "",
      description: "",
      calories: 0,
      cookingTime: 0,
      portions: 0
    }]
  };

  componentDidMount() {
    axios.get(requestURLInfo)
      .then(res => {
        messhallsInfo = res.data;
        messhallsInfo.map(a => myMesshallUID = a.messHallUID); //.messHallUID
        // this.setState({ messhallsRecipes: res.data });

        console.log(myMesshallUID)

        axios.get(requestURLInfoRecipes + myMesshallUID)
          .then(res => {
            const messhallsInfo = res.data;
            console.log(messhallsInfo);
            this.setState({ messhallsRecipes: res.data });
          })

      })

  }

  render() {

    return (
      <div class="flex justify-center items-center overflow-x-auto space-x-8 w-screen bg-transparent">
        {/* // <div> */}
        {this.state.messhallsRecipes.map((recipeInfo) => (

          <div class="container mx-auto px-20 my-auto py-20">
            <div class="mt-12" style={{ backgroundColor: "transparent" }} >
              <div class="relative px-4 mx-auto max-w-7xl sm:px-8 lg:px-16 cursor-auto" >
                <div class="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
                  <div class="flex-1 px-6 py-16 bg-gray-500 lg:p-24 cursor-auto">
                    <div class="flex-1 px-6 py-16 bg-white lg:p-24 cursor-auto">
                      <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl cursor-auto"> {recipeInfo.name} </h3>
                      <p class="mt-6 text-base text-gray-500">{recipeInfo.description}</p>
                      <p class="mt-6 text-base text-gray-500">Calories: {recipeInfo.calories}</p>
                      <p class="text-base text-gray-500">CookingTime: {recipeInfo.cookingTime}'</p>
                      <p class="text-base text-gray-500">Portions: {recipeInfo.portions}'</p>

                      <div class="mt-8">
                        <div class="flex items-center">
                          <h4 class="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">Ingrediente</h4>
                          <div class="flex-1 border-t-2 border-gray-200"></div>
                        </div>
                        <ul class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">

                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg class="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm text-gray-700">Carne de berberita</p>
                            <p class="ml-3 text-sm text-gray-700">500g</p>
                          </li>

                          <li class="flex items-start lg:col-span-1">
                            <div class="flex-shrink-0">
                              <svg class="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                            <p class="ml-3 text-sm text-gray-700">Lapte de pasare</p>
                            <p class="ml-3 text-sm text-gray-700">100g</p>
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        ))}

      </div>
    );
  }
}
