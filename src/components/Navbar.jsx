import Dropdown from './Dropdown.jsx'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar bg-black flex justify-center items-center text-white text-3xl">
            <div id="navbar-inner" className="w-full h-auto flex px-4 py-1 text-center">
                <button className="btn home-btn pr-4"><h1>name</h1></button>
                <button className=" btn ml-auto px-4 max-sm:hidden flex">about</button>
                <button className="btn px-4 max-sm:hidden flex">resume</button>
                <button className="btn px-4 max-sm:hidden flex">contact</button>
                <h2 className="ml-auto flex flex-col"><Dropdown/></h2>
            </div>
        </div>
    )
}

export default Navbar