import { useEffect, useState } from "react";

const Auth = () => {
    const [userToken, setUserToken] = useState(JSON.parse(localStorage.getItem("auth")));

    const getToken = () => {
        return userToken.token;
    }

    const getUserId = () => {
        return userToken.user_id;
    }

    const getUserDetails = () => {
        return userToken;
    }

    const logout = () => {
        localStorage.removeItem("auth");
    }

    useEffect(() => {
        localStorage.setItem("auth",JSON.stringify(userToken))
    },[userToken]);

    return {getToken, getUserId, getUserDetails, logout, setUserToken};

}

export default Auth();