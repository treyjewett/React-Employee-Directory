import React, { useState, useEffect } from "react";
import getEmployee from "../../utils/API";


const Search = () => {
    // const [search, setSearch] = useState("");

    // useEffect(() => {
    //     if(!search) {
    //         return;
    //     }

    //     getEmployee(search).then(res => {
    //         if (res.data.length === 0) {

    //         }
    //     })
    // })

    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="language">Search Employee:</label>
                <input
                value="insert user input here"
                onChange="tell rect where to handle the changing input"
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