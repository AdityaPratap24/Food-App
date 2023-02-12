import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : 'Aditya',
        email : 'aditya@gmail.com',
    },
});

export default UserContext;