import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])



  const reveal = () => setShow(!show)

  function handleClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

  return <div className="hidden max-sm:flex flex-col " ref={parent}>
    <strong className="dropdown-label max-sm:text-2xl md:hidden" onClick={reveal}>more</strong>
    { show && <p className="dropdown-content flex flex-col max-sm:text-xl" >
    <a id="aboutbtn" href="#about-top" onClick={handleClick} className="">about</a>
    <a id="resumebtn" href="#resume" onClick={handleClick} className="">resume</a>
    <a id="contactbtn" href="#contact" onClick={handleClick} className="">contact</a>
    </p> }
  </div>
}

export default Dropdown