import axios from "axios";

const getEmployee = () => {
    return new Promise((resolve, reject) => {
        axios
            .get("https://randomuser.me/api/results=10")
            .then(res => {
                const employee = res.data;
                const results = employee.map(employee => {
                    return {
                        key: employee.info.seed,
                        image: employee.results.picture.thumbnail,
                        first: employee.results.name.first,
                        last: employee.results.name.last,
                        age: employee.results.dob.age,
                        city: employee.result.location.city,
                        state: employee.result.location.state,
                    };
                });
                resolve(results);
                console.log(results);
            })
            .catch(err => reject(err));
    });
};

export default getEmployee;