import React, { useEffect, useState } from "react";
import getEmployee from "../../utils/API";

function Table() {
    const [table, setTable] = useState([]);

    useEffect(() => {
        getEmployee().then((results) => {
            setTable(results);
        });
    }, []);

    // useEffect(() => {
    //     console.log("table: ", table)
    // }, [table]);

    const firstSort = () => {
        
    }

    const lastSort = (table) => {

    }

    const ageSort = (table) => {

    }

    return (
        <table className="table table-hover">
            <thead>
                <header className="tableHead">Employees</header>
                <tr>
                    <th>Employee Photo</th>
                    <th>First Name <span className='downArrow fa fa-angle-down' onClick={firstSort()}></span></th>
                    <th>Last Name <span className='downArrow fa fa-angle-down' onClick={lastSort()}></span></th>
                    <th>Age <span className='downArrow fa fa-angle-down' onClick={ageSort()}></span></th>
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