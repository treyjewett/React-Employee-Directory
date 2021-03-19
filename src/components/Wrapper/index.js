import React, { useEffect, useState } from "react";
import getEmployee from "../../utils/API";
import Table from "../Table";
import Search from "../Search";

function EmployeeCont() {
    const [table, setTable] = useState([]);

    useEffect(() => {
        getEmployee().then((results) => {
            setTable(results);
        });
    }, []);

    useEffect(() => {
    }, [table]);

    return (
        <>
            <Search employeeTable={table} updateTable={setTable} />
            <Table employeeTable={table} updateTable={setTable} />
        </>
    )
};

export default EmployeeCont