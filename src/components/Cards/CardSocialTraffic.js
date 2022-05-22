import React from "react";
import axios from 'axios';

const URLmesshall = `http://172.19.0.2:8081`
const URLrecipe = `http://172.19.0.3:8080`

// components
const requestURLInfo = URLmesshall + `/messhallmanager/messhall/info`

export default class CardSocialTraffic extends React.Component {
  state = {
    messhallsInfo: [{
      messHallUID: "",
      street: "",
      city: "",
      country: "",
      menuUID: "",
      status: "",
      attendanceNumber: 0
    }]
  };

  componentDidMount() {
    // this.getMessHallsInfo()
    axios.get(requestURLInfo)
      .then(res => {
        const messhallsInfo = res.data;
        console.log(res.data)
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
                  Messhall Attendants
                </h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead className="thead-light">
                <tr>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Messhall UID
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Attendants
                  </th>
                  <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                </tr>
              </thead>
              <tbody>

                {this.state.messhallsInfo.map((rowState) => (

                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {rowState.messHallUID}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {rowState.attendanceNumber}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2"> {rowState.attendanceNumber * 5}% </span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: (rowState.attendanceNumber * 5) + "%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
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
