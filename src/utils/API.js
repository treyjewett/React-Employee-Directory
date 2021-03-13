import axios from "axios";

const getEmployee = () => {
    return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api/?results=20").then(res => {
            const results = res.data.results.map(employee => ({
                key: employee.login.uuid,
                image: employee.picture.large,
                first: employee.name.first,
                last: employee.name.last,
                age: employee.dob.age,
                city: employee.location.city,
                state: employee.location.state,
            }));
            resolve(results);
            console.log(results);
        })
        .catch(err => reject(alert(err)));
    })
};

export default getEmployee;