import API from "../axios/API";
import Auth from "../modules/Auth";

export const login = async (email,password) => {
    const body = {
        credential: {
            email: email,
            password: password
        }
    };
    return await API({
        method: "POST",
        url: "/users/login",
        data: body
    }).then(res => {
        Auth.setUserToken(res.data.setUserToken);
        return res;
    })
}

export const register = async (fullname, email, password, verifyPassword) => {
    return await API({
        method: "POST",
        url: "/users/login",
        data: {
            fullname,
            email,
            password,
            verifyPassword
        }
    }).then(res => {
        console.log(res);

        return res;
    })
}