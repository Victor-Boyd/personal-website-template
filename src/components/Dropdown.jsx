import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div className="hidden max-sm:flex flex-col " ref={parent}>
    <strong className="dropdown-label max-sm:text-2xl md:hidden" onClick={reveal}>more</strong>
    { show && <p className="dropdown-content flex flex-col max-sm:text-xl" >
    <button className="">about</button>
    <button className="">resume</button>
    <button className="">contact</button>
    </p> }
  </div>
}

export default Dropdown