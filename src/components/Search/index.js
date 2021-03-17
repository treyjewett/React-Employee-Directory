import React, { useState, useEffect } from "react";
import getEmployee from "../../utils/API";


const Search = () => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        if(!search) {
            return;
        }

        getEmployee(search).then(res => {
            console.log(res);
            setSearch(res);
        })
    })

    const handleInputChange = event => {
        console.log(search);
      };

    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search Employee:</label>
                <input
                value={search}
                onChange={() => handleInputChange()}
                name="employee"
                list="employeeList"
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