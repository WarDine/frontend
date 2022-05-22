import React from "react";
import axios from 'axios';

// components

import CardStats from "components/Cards/CardStats.js";
import backgroung_image from "assets/img/messHall.jpg";

const URLmesshall = `http://172.19.0.3:8081`
const URLrecipe = `http://172.19.0.2:8080`

const requestURLGenerateMenu = URLrecipe + `/api/menu/generate/`
const requestURLInfoRecipes = URLrecipe + `/api/recipe/get-by-messhall/`
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

function callbackGenerateMenu() {
  axios.get(requestURLInfo)
    .then(res => {
      messhallsInfo = res.data;
      myMesshallUID = messhallsInfo.map(a => a.messHallUID);

      axios.get(requestURLGenerateMenu + myMesshallUID)
        .then(res => {
          console.log(res)
        })
    })
}

function callbackGetShoppingList() {
  console.log("Here2")
}

function callbackAddRecipe() {
  window.location.href = "http://localhost:3000/admin/dashboard/addrecipe";
}

export default class HeaderStats extends React.Component {

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
        myMesshallUID = messhallsInfo.map(a => a.messHallUID);



        axios.get(requestURLInfoRecipes + myMesshallUID)
          .then(res => {
            const messhallsInfo = res.data;
            this.setState({ messhallsRecipes: res.data });
          })
      })
  }

  render() {
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
                    cardText="Generate Menu"
                    cardContent="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded'"
                    cardCallback={callbackGenerateMenu}
                    statIconName="fas fa-chart-pie"
                    statIconColor="bg-orange-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                  <CardStats
                    cardText="Get Shopping List"
                    cardCallback={callbackGetShoppingList}
                    cardContent="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-pink-700 hover:border-pink-500 rounded'"
                    statIconName="fas fa-users"
                    statIconColor="bg-pink-500"
                  />
                </div>
                <div className="w-full lg:w-6/12 xl:w-4/12 px-4">
                  <CardStats
                    cardText="Add Recipe"
                    cardCallback={callbackAddRecipe}
                    cardContent="bg-lightBlue-500 hover:bg-lightBlue-400 text-white font-bold py-2 px-4 border-b-4 border-lightBlue-700 hover:border-lightBlue-500 rounded'>"
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
}
