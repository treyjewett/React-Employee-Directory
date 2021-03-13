import React from "react";

const EmployeeContext = React.createContext({
    key: "",
    image: "",
    first: "",
    last: "",
    age: 0,
    city: "",
    state: ""
});

export default EmployeeContext;