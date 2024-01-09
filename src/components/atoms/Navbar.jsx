import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
<>
    <div className='navbar'>
        <ul>
            <li className="logo"><img src="src/assets/images/coronavirus.png" alt="logo" /></li>
            <li className="icons"><img src="src/assets/images/icons/graphic.svg" alt="Graphic" /></li>
            <li className="icons"><img src="src/assets/images/icons/list.svg" alt="List" /></li>
            <li className="icons"><img src="src/assets/images/icons/icons.svg" alt="Icons" /></li>
            <li className="icons"><img src="src/assets/images/icons/collections.svg" alt="Collection" /></li>
            <li className="icons"><img src="src/assets/images/icons/folder.svg" alt="Folder" /></li>
            <li className="icons"><img src="src/assets/images/icons/stats.svg" alt="Stats" /></li>
            <li className="icons"><img src="src/assets/images/icons/world.svg" alt="World" /></li>
            <li className="icons"><img src="src/assets/images/icons/coment.svg" alt="Comments" /></li>
            <li className="icons"><img src="src/assets/images/icons/stuff.svg" alt="Stuff" /></li>

        </ul>
    </div>
    </>
  )
}

export default Navbar