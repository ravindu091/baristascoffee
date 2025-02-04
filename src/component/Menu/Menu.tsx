import { MenuIcon, Search } from "lucide-react";
import { Link } from "react-router-dom"

function Menu() {
    const menuItems = [
        {tittle:"home",path:'/'},
        {tittle:"iced mocha",path:'/'},
        {tittle:"espresso",path:'/'},
        {tittle:"cappuccino",path:'/'},
        {tittle:"more",path:'/'},
        {tittle:"blogs",path:'/'}
    ]
  return (
    <div className="bg-[#C5A17C] p-3 flex flex-row justify-between">
        <div id="menu-items" className="flex flex-row items-center gap-3 max-md:hidden">
            {
                menuItems.map((item)=>{
                    return <Link to={item.path} key={item.tittle} className=" uppercase text-md font-bold  ">{item.tittle}</Link>;
                })
            }
        </div>
        <div className=" hidden max-md:flex items-center pl-3">
            <MenuIcon />
        </div>
        <div id="search-bar" className="flex flex-row justify-center items-center gap-2">
            <input type="text" name="search" id="search-bar" placeholder="Search..." className="py-2 px-3 rounded-3xl focus:outline-[#D98D43]" />
            <Search className="text-white"/>
        </div>
    </div>
  )
}

export default Menu