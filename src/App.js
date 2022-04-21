import Navbar from "./components/Navbar";
import Status from "./components/Status";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-js-loader";

function App() {
  const [employee, setEmployee] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getFetchUsers = () => {
    setLoading(true);
    axios
      .get("http://employee-alphatech.herokuapp.com/employees")
      .then((res) => {
        setEmployee(res.data);
        setLoading(false);
      });
  };

  const updateUser = (person, isActive) => {
    let data = { ...person, active: isActive };
    axios
      .put(
        "http://employee-alphatech.herokuapp.com/employees/" + person.id,
        data
      )
      .then(() => {
        getFetchUsers();
      });
  };
  useEffect(() => {
    getFetchUsers();
  }, []);

  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Status />
      </div>
      <div>
        {isLoading ? (
          <Loader
            type="spinner-circle"
            bgColor={"#FFFFFF"}
            title={"Loading"}
            color={"#FFFFFF"}
            size={100}
          />
        ) : (
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 mx-6 md:grid-cols-2">
            {employee.map((emp) => (
              <div>
                <Card key={emp.id} person={emp} updateUser={updateUser} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
