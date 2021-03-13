import React, { useContext } from "react";
import EmployeeContext from "../../utils/employeeContext";

function Table() {
    const { employee } = useContext(EmployeeContext);
    return (
        <table>
            <caption>Employees</caption>
            <thead>
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
                {employee.map(employee => (
                    <tr key={employee.key}>
                        <td><img href={employee.image} alt="Not Provided"></img></td>
                        <td>{employee.first}</td>
                        <td>{employee.last}</td>
                        <td>{employee.age}</td>
                        <td>{employee.city}</td>
                        <td>{employee.state}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;