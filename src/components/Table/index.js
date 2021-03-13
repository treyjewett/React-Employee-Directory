import React, { useEffect, useState } from "react";
import getEmployee from "../../utils/API";

function Table() {
    const [table, setTable] = useState([]);
    // const []

    useEffect(() => {
        getEmployee().then((results) => {
            setTable(results);
            console.log("results: ", results);
        });
    }, []);

    useEffect(() => {
        console.log("table: ", table)
    }, [table]);

    return (
        <table className="table">
            <thead>
                <header className="tableHead">Employees</header>
                <tr>
                    <th>Employee Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
                {table.map(employee => (
                    <tr key={employee.key}>
                        <td>
                            <img src={employee.image} alt="Not Provided"></img>
                        </td>
                        <td>
                            {employee.first}
                        </td>
                        <td>
                            {employee.last}
                        </td>
                        <td>
                            {employee.age}
                        </td>
                        <td>
                            {employee.city}
                        </td>
                        <td>
                            {employee.state}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;