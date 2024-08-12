import axios from "axios";

const setToken =(token)=> {
    localStorage.setItem("token",token);
};
const getToken =()=> {
    return localStorage.getItem("token");
};

const isAuth =async ()=>{
    try {
        const token = getToken();
        //console.log("token :",token);

        const res = await axios({
            method: "POST",
            url: "http://localhost:5050/users/isauth",
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        //console.log(res.data);
        return true;
        
    } catch (error) {
        console.log("Authentication Failed");
        return false;
    }
}

export {setToken,getToken,isAuth}