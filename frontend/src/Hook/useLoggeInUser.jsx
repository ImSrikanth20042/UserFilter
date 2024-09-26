import { useEffect, useState } from "react";
import { useUserAuth } from "../UserAuthContext/useUserContext";
const useLoggedInUser = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const user = useUserAuth();
  const email = user?.email;
  useEffect(() => {
    fetch(`http://localhost:8000/loggedinuser?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoggedInUser(data);
      });
  }, [email, loggedInUser]);
  return [loggedInUser, setLoggedInUser];
};
export default useLoggedInUser;
