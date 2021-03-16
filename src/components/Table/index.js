import React, { useEffect, useState } from "react";
import getEmployee from "../../utils/API";

function Table() {
    const [table, setTable] = useState([]);

    const forceUpdate = React.useReducer(() => ({}), {})[1];

    useEffect(() => {
        getEmployee().then((results) => {
            setTable(results);
        });
    }, []);

    useEffect(() => {
        console.log("table useEffect: ", table)
    }, [table]);

    function firstSort() {
        let newTable = table.sort((a, b) => {
            if (a.first < b.first) {
                return -1
            }
            if (a.first > b.first) {
                return 1
            }
            return 0
        });
        let choice = prompt('Type "a" for Ascending or "d" for Descending');
        if (choice === null) {
            return;
        } else if (choice !== 'a' && choice !== 'd') {
            alert('Please enter a valid character!');
            firstSort();
        }
        switch (choice.toLowerCase()) {
            case 'd':
                setTable(newTable.reverse());
                forceUpdate();
                break;
            default:
                setTable(newTable);
                forceUpdate();
        }
    };

    const lastSort = () => {
        let newTable = table.sort((a, b) => {
            if (a.last < b.last) {
                return -1
            }
            if (a.last > b.last) {
                return 1
            }
            return 0
        });
        let choice = prompt('Type "a" for Ascending or "d" for Descending');
        if (choice === null) {
            return;
        } else if (choice !== 'a' && choice !== 'd') {
            alert('Please enter a valid character!');
            lastSort();
        }
        switch (choice.toLowerCase()) {
            case 'd':
                setTable(newTable.reverse());
                forceUpdate();
                break;
            default:
                setTable(newTable);
                forceUpdate();
        }
    };

    const ageSort = () => {
        let newTable = table.sort((a, b) => {
            if (a.age < b.age) {
                return -1
            }
            if (a.age > b.age) {
                return 1
            }
            return 0
        });
        let choice = prompt('Type "a" for Ascending or "d" for Descending');
        if (choice === null) {
            return;
        } else if (choice !== 'a' && choice !== 'd') {
            alert('Please enter a valid character!');
            ageSort();
        }
        switch (choice.toLowerCase()) {
            case 'd':
                setTable(newTable.reverse());
                forceUpdate();
                break;
            default:
                setTable(newTable);
                forceUpdate();
        }
    }

    return (
        <table className="table table-hover">
            <thead>
                <header className="tableHead">Employees</header>
                <tr>
                    <th>Employee Photo</th>
                    <th>First Name <button className='downArrow fa fa-angle-down' onClick={() => firstSort()}></button></th>
                    <th>Last Name <button className='downArrow fa fa-angle-down' onClick={() => lastSort()}></button></th>
                    <th>Age <button className='downArrow fa fa-angle-down' onClick={() => ageSort()}></button></th>
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