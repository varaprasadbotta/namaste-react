import { useEffect, useState } from "react";
import UserClass from "./UserClass";
import UserFun from "./UserFun";

const About = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/varaprasadbotta");
    const json = await data.json();
    setUserInfo(json);
    
  };

  const{ name,id,avatar_url} = userInfo

  return (
    <div>
      <UserFun
       photo = {avatar_url}
        name={name}
        gitHubId={id}
      />

      <UserClass
        name={" Prasad Botta Class"}
        role={" React Dev"}
        company={" Google"}
      />
    </div>
  );
};

export default About;
