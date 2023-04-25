import React, { useRef } from 'react'

const Dropdown = ({show, className, children, setShowProductDropdown, setShowHelpDropdown }) => {
  const dropDownRef = useRef(null)
  // useEffect(() => {
  //   document.addEventListener('mousedown', (event) => {
  //     if (!dropDownRef.current?.contains(event.target)) {
  //       setShowProductDropdown(false)
  //     }
  //   })
  // })
    if (!show) return null;

    return (
      <div ref={dropDownRef} className={className}>
        <div className="shadow-lg rounded-md p-8">
          <main>{children}</main>
        </div>
      </div>
    );
  }

export default Dropdown