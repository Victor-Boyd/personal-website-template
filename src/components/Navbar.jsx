import Dropdown from './Dropdown.jsx'

function Navbar() {
    return (
        <div className=" w-full h-20 bg-black flex justify-center items-center text-white text-3xl">
            <div className="w-full h-auto flex px-4 py-1 text-center">
                <h1 >name</h1>
                <h2 className="ml-auto"><Dropdown/></h2>
            </div>
        </div>
    )
}

export default Navbar