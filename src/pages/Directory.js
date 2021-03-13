import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/employeeContext";
import Container from "../components/Wrapper";
import Table from "../components/Table";

const Directory = () => {
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        API.getEmployee()
        .then(employee => {
            setEmployee(employee);
        })
        .catch(err => console.log(err));
    }

    return (
        <EmployeeContext.Provider value={{ employee }}>
            <Container />
            <Table />
        </EmployeeContext.Provider>
    )
}

export default Directory;