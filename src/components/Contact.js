import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact = () => {
    const {user} = useContext(UserContext);
    return (
    <>
    <a
          className="text-2xl p-3 my-4  w-1/5 m-auto flex font-bold text-red-400
            hover:shadow-lg hover:shadow-green-500  "
          href="https://www.linkedin.com/in/aditya-pratap-singh-1391421a3"
          target="_blank"
        >
          Contact on Linkedin
        </a>
    </>
    )
    
}

export default Contact;