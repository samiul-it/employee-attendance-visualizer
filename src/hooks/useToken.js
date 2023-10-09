import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    
    axios({
      method: "post",
      url: "/user/12345",
      data: {
        firstName: "Fred",
        lastName: "Flintstone",
      },
    });
  }, []);
  return <div></div>;
};

export default useToken;
