import React from "react";

const Table = (props) => {
    const forceUpdate = React.useReducer(() => ({}), {})[1];

    function firstSort() {
        let newdata = props.employeeTable.sort((a, b) => {
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
                props.updateTable(newdata.reverse());
                forceUpdate();
                break;
            default:
                props.updateTable(newdata);
                forceUpdate();
        }
    };

    const lastSort = () => {
        let newdata = props.employeeTable.sort((a, b) => {
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
                props.updateTable(newdata.reverse());
                forceUpdate();
                break;
            default:
                props.updateTable(newdata);
                forceUpdate();
        }
    };

    const ageSort = () => {
        let newdata = props.employeeTable.sort((a, b) => {
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
                props.updateTable(newdata.reverse());
                forceUpdate();
                break;
            default:
                props.updateTable(newdata);
                forceUpdate();
        }
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr className="tableHead">
                    <th>Employees</th>
                </tr>
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
                {props.employeeTable.map(employee => (
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