import { useState, useRef, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const Dropdown = () => {
  const [show, setShow] = useState(false)
  const parent = useRef(null)

  useEffect(() => {
    const parentOne = parent.current
    console.log(parent.parentOne, parent.current)
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const reveal = () => setShow(!show)

  return <div ref={parent}>
    <strong className="dropdown-label text-2xl" onClick={reveal}>more</strong>
    { show && <p className="dropdown-content" >Lorum ipsum...</p> }
  </div>
}

export default Dropdown