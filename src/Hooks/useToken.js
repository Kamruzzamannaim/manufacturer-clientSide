import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://afternoon-hamlet-34240.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application.json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          setToken(accessToken);
          localStorage.setItem("accessToken", accessToken);
        });
    }
  }, [user]);
  return[token];
};
export default useToken;
