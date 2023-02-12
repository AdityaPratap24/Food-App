import { useState,useContext } from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src="https://media.istockphoto.com/id/1205449806/vector/burger-fast-food-logo-template.jpg?s=612x612&w=0&k=20&c=_3oV_jqWPs9XygkK-jrXl13DKmI_RaDgsDWWo8fJzMI="
    />
  </a>
);

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const isOnline = useOnline();
  const {user}  = useContext(UserContext);

  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems);

  return (
    <div className="sticky top-0 bg-pink-300 z-10 shadow-md">
      <div className="p-3  w-4/5 m-auto flex justify-between items-center">
      <Title />
        <ul className="h-full flex justify-between gap-5 text-xl" >
          <Link to = "/" >
            <li className="px-3 py-2  hover:shadow-lg hover:shadow-pink-900 transition duration-0 hover:duration-450">Home</li>
          </Link>
          <Link to = "/about">
            <li className="px-3 py-2 hover:shadow-lg hover:shadow-pink-900 transition duration-0 hover:duration-450">About</li>
          </Link>
          <Link to = "/contact">
            <li className="px-3 py-2 hover:shadow-lg hover:shadow-pink-900 transition duration-0 hover:duration-450">Contact</li>
          </Link>
          <Link to= '/cart'>
            <li className="px-3 py-2 hover:shadow-lg hover:shadow-pink-900 transition duration-0 hover:duration-450">Cart - {cartItems.length} items</li>
          </Link>
        </ul>
      <h1>{isOnline ? '✔️' : '❌'}</h1>
      {/* {<h1>{user.name}</h1>} */}
      {/* {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Log In</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Log Out</button>
      )} */}
      </div>
    </div>
  );
};

export default Header;
