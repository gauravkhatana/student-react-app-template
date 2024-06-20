import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let global = createContext();

const Context = ({ children }) => {
  const [serverData, setServerData] = useState([]);
  let [loginUser, setLoginUser] = useState({});

  let fetchd = async () => {
    const { data } = await axios.get("http://localhost:5000/users");
    console.log(data);
    setServerData(data);
  };

  useEffect(() => {
    fetchd();
    console.log(serverData);
  }, []);

  let { Provider } = global;

  let validate = (userData) => {
    const user = serverData.filter((obj) => {
      console.log(obj.email);
      console.log(userData.email);
      console.log(obj.password);
      console.log(userData.password);
      return obj.email == userData.email && obj.password == userData.password;
    });
    console.log(user);
    if (user.length != 0) {
      setLoginUser(user[0]);
      return user[0];
    } else return false;
  };

  return (
    <Provider value={{ loginUser, setLoginUser, validate }}>
      {children}
    </Provider>
  );
};

export default Context;
