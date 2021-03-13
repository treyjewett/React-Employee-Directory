import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/employeeContext";
import Container from "../components/Wrapper";
import Table from "../components/Table";

const Directory = () => {
    const [employees, setEmployees] = useState({});

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        API.getEmployee()
        .then(employees => {
            setEmployees(employees);
        })
        .catch(err => console.log(err));
    }

    return (
        <EmployeeContext.Provider value={{ employees }}>
            <Container />
            <Table />
        </EmployeeContext.Provider>
    )
}

export default Directory;