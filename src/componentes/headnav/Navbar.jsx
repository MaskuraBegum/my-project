import { useState } from "react";
import Navul from "./Navul";
import { CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const routes = [{id:1,path:"/",name:"Home"},{id:2,path:"/about",name:"About"},{id:3,path:"/services",name:"Services"},{id:4,path:"/contact",name:"Contact"},{id:5,path:"/dashboard",name:"Dashboard"}];
    const [open,setopen] = useState(false);
    return (
        <div>
            <div onClick={()=> setopen(!open)}>
            {
                open == true ? <div className="md:hidden"><CiMenuFries /></div> : <div className="md:hidden"><RxCross1 /></div>
            }
            <div className=''>
            <ul className={`md:flex justify-center items-center border-2 w-32 lg:w-full bg-black text-white absolute md:static px-6  ${
                open == false? 'top-5 left-5':'-top-60'
            }`}>
                {
                    routes.map(route => <Navul route={route} key={route.id}></Navul>)
                }
            </ul>
            </div>
            </div>
            
        </div>
    );
};

export default Navbar;