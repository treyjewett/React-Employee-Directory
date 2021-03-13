import React from "react";

const EmployeeContext = React.createContext({
    image: "",
    first: "",
    last: "",
    age: 0,
    city: "",
    state: ""
});

export default EmployeeContext;