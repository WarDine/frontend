import React from "react";
import axios from 'axios';
// components

// const requestURLUpdate = `http://172.19.0.3:8081/messhallmanager/messhall/update/`
// const requestURLInfo = `http://172.19.0.3:8081/messhallmanager/messhall/info`
// const requestURLDelete = `http://172.19.0.3:8081/messhallmanager/messhall/delete/`

const requestURLUpdate = `http://messhallmanager:8081/messhallmanager/messhall/update/`
const requestURLInfo = `http://messhallmanager:8081/messhallmanager/messhall/info`
const requestURLDelete = `http://messhallmanager:8081/messhallmanager/messhall/delete/`

export default class CardPageVisits extends React.Component {
  state = {
    messhallsInfo: [{
      MessHallAdminNickname: "",
      messHallUID: "",
      street: "",
      city: "",
      country: "",
      menuUID: "",
      status: "",
      attendanceNumber: 0
    }]
  };

  removeMessHall(rowState) {
    var messhallUID = rowState.messHallUID

    axios.delete(
      requestURLDelete + messhallUID
    ).then(() => {
      // var newMesshallsInfo = this.state.messhallsInfo

      // newMesshallsInfo.forEach((row) => {
        // if (row.messHallUID === messhallUID) {
          // row.status = messhallStatus
        // }
      // });

      // this.setState([{ messhallsInfo: newMesshallsInfo }])
      this.componentDidMount()
    })
  }

  changeStatus(rowState) {

    var messhallUID = rowState.messHallUID//= this.state.messhallsInfo.map((pla) => (pla.messHallUID))
    var messhallStatus = rowState.status //= this.state.messhallsInfo.map((pla) => (pla.status))

    if (messhallStatus === 'available') messhallStatus = 'unavailable'; else messhallStatus = 'available';

    axios.post(
      requestURLUpdate + messhallUID + `/` + messhallStatus
    ).then(() => {
      var newMesshallsInfo = this.state.messhallsInfo
      // newMesshallsInfo.forEach(element =>  if(true) element.status = messhallStatus )

      newMesshallsInfo.forEach((row) => {
        if (row.messHallUID === messhallUID) {
          row.status = messhallStatus
        }
      });

      this.setState([{ messhallsInfo: newMesshallsInfo }])
    })
  }

  componentDidMount() {
    // this.getMessHallsInfo()
    axios.get(requestURLInfo)
      .then(res => {
        const messhallsInfo = res.data;
        this.setState({ messhallsInfo: res.data });
      })
  }

  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Messhalls Attendants
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Messhall UID
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Mainhall Address
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Change State
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    {/* Change State */}
                  </th>
                </tr>
              </thead>
              <tbody>

                {this.state.messhallsInfo.map((rowState) => (

                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      <span> {rowState.messHallUID} </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <span> {
                        rowState.street + ", " + rowState.city + ", " + rowState.country
                      } </span>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <button onClick={() => { this.changeStatus (rowState) }} class="bg-slate-200 hover:bg-red-400 text-black font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                        <span> {rowState.status} </span>
                      </button>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {/* <i className="fas fa-arrow-up text-emerald-500 mr-4"></i> */}
                      <button onClick={() => { this.removeMessHall (rowState) }} class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                        <span> Remove </span>
                      </button>
                    </td>
                  </tr>

                ))}


              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
