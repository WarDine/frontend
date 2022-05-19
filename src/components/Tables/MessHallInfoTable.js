import React from "react";
import TableDropdown from "components/Dropdowns/TableDropdown.js";


export default class MessHallInfoTable extends React.Component {
    state = {
        rows: [{}]
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {
            name: "",
            mobile: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column">
                            <table
                                className="table table-bordered table-hover w-full text-sm text-left text-gray-500 dark:text-gray-400"
                                id="tab_logic"
                            >
                                <thead>
                                    <tr>
                                        <th className="text-center"> # </th>
                                        <th className="text-center"> Name </th>
                                        <th className="text-center"> Mobile </th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.rows.map((item, idx) => (

                                        <tr>
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                                <img
                                                    src={require("assets/img/vue.jpg").default}
                                                    className="h-12 w-12 bg-white rounded-full border"
                                                    alt="..."
                                                ></img>{" "}
                                                <span
                                                    className={
                                                        "ml-3 font-bold " +
                                                        +("text-blueGray-600")
                                                    }
                                                >
                                                    React Material Dashboard
                                                </span>
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                $2,200 USD
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                                                completed
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex">
                                                    <img
                                                        src={require("assets/img/team-1-800x800.jpg").default}
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                    ></img>
                                                    <img
                                                        src={require("assets/img/team-2-800x800.jpg").default}
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    ></img>
                                                    <img
                                                        src={require("assets/img/team-3-800x800.jpg").default}
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    ></img>
                                                    <img
                                                        src={require("assets/img/team-4-470x470.png").default}
                                                        alt="..."
                                                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                    ></img>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <div className="flex items-center">
                                                    <span className="mr-2">100%</span>
                                                    <div className="relative w-full">
                                                        <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                                                            <div
                                                                style={{ width: "100%" }}
                                                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                                <TableDropdown />
                                            </td>
                                        </tr>


                                    ))}
                                </tbody>
                            </table>
                            <button onClick={this.handleAddRow} className="btn btn-primary">
                                Add Row
                            </button>
                            <button
                                onClick={this.handleRemoveRow}
                                className="btn btn-danger float-right"
                            >
                                Delete Last Row
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
