import Dropdown from './Dropdown.jsx'
import Hero from './Hero.jsx'
import './Navbar.css'

function Navbar() {
    function handleClick(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId);
        console.log(targetElement)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
    

    return (
        <div id="top" className=" navbar placeholder w-full">
        <div className="navbar w-full fixed bg-black flex justify-center items-center text-white text-3xl">
            <div id="navbar-inner" className="w-full h-auto flex px-4 py-1 text-center">
                <a id="homebtn" href="#top" onClick={handleClick} className="btn home-btn pr-4"><h1>name</h1></a>
                <a id="aboutbtn" href="#about" onClick={handleClick} className=" btn ml-auto px-4 max-sm:hidden flex">about</a>
                <a id="resumebtn" href="#resume" onClick={handleClick} className="btn px-4 max-sm:hidden flex">resume</a>
                <a id="contactbtn" href="#contact" onClick={handleClick} className="btn px-4 max-sm:hidden flex">contact</a>
                <h2 className="ml-auto absolute max-sm:relative flex flex-col"><Dropdown/></h2>
            </div>
        </div>
        </div>
    )
}

export default Navbar