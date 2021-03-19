import React from "react";

const Search = (props) => {

    const handleInputChange = (e) => {
        e.preventDefault();
        const input = e.target.value.toLowerCase();
        const existingTable = props.employeeTable;

        const filter = existingTable.filter((data) => {
            const result = data.first + data.last;
            return result.toLowerCase().includes(input);
        });

        props.updateTable(filter);
      };

    return (
        <form className="search">
            <div className="form-group">
                <label className="searchLabel" htmlFor="language">Search Employee:</label>
                <input
                value={props.input}
                onChange={(e) => handleInputChange(e)}
                name="employee"
                list="employeeTable"
                type="text"
                className="form-control"
                placeholder="Search by First or Last name!"
                id="employee"
                />
            </div>
        </form>
    );
}

export default Search;