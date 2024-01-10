import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
<>
    <div className='navbar'>
        <ul>
            <li className="logo">
              <a href="/">
                <img src="src/assets/images/coronavirus.png" alt="logo" />
              </a>
            </li>

            <li className="icons">
              <a href="/tracker_1">
                <img src="src/assets/images/icons/graphic.svg" alt="Graphic" />
              </a>
            </li>

            <li className="icons"><img src="src/assets/images/icons/list.svg" alt="List" /></li>

            <li className="icons">
              <a href="/tracker_3"> 
                <img src="src/assets/images/icons/icons.svg" alt="Icons" />
              </a>
            </li>

            <li className="icons"><img src="src/assets/images/icons/collections.svg" alt="Collection" /></li>
            <li className="icons">
              <a href="/tracker_4"> 
                <img src="src/assets/images/icons/folder.svg" alt="Folder" />
              </a>
            </li>
            
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