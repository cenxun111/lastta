import React from "react";
import Drop from './Drop'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-gray-200 pt-4 px-40">
      <h1 className="text-2xl font-semibold" ><Link to ="/">Altech.CN</Link></h1>

      {/* <div className="relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">尋</button>
      </div> */}

      <div className="flex pr-2">
        {/* <h1 className="text-2xl px-4">
        <Link to= "/upload">登录</Link>
        </h1> */}
        <h1 className="text-2xl px-4">
        <Link to ="/sub">访客中心</Link>
        </h1>
        <h1 className="text-2xl px-4">
        <Link to ="/factorycenter">智造中心</Link>
         </h1>
        <Drop />
      </div>
      
    </div>
  );
};



export default Navbar;
