import React from 'react'
import '../HomePage/Home.css'
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    const handleTrackerButtonClick = () => {
      navigate('/tracker1');
    };

  return (
    <>
    <body className='body'>
    <header className='header'>
        <nav className="navbar_container">
            <ul className="main_list">
                <li className="main_list_member"><img src="./src/assets/images/logo.png" /></li>
                <li className="main_list_member">Home <i className="fa-solid fa-caret-down"></i>
                    <ul className="home_lists"><li>Home One</li>
                    <li>Home Two</li>
                    <li>Home Three</li>
                    <li>Home Four</li>
                    <li>Home Five</li>
                    <li>Home Dark One</li>
                    <li>Home Dark Two</li>
                    <li>Home Dark Three</li>
                    <li>Home Dark Four</li>
                    <li>Home Dark Five</li>
                    <li>Onepage</li>
                    <li>Onepage Dark</li>
                    <li>Tracker</li></ul>
                </li>
                <li className="main_list_member">Prevention</li>
                <li className="main_list_member">Qurantine</li>
                <li className="main_list_member">Pages <i className="fa-solid fa-caret-down"></i>
                    <ul className="pages_list">
                        <li>Hand Wash</li>
                        <li>SocialDistance</li>
                        <li>Blog</li>
                        <li>Blog Details</li>
                    </ul>
                </li>
                <li className="main_list_member">About</li>
                <li className="main_list_member">Help</li>
                <li className="main_list_member">
                    <button onClick={handleTrackerButtonClick}>Tracker</button></li>
            </ul>
        </nav>
    </header>
    <main >
        <div className="content_container">
            <div className="title_container">
            <h1>Download the Covid app for get latest update</h1>
            <p>Human coronavirus are common and are typically associated with mild illness, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories arround the world and 2 international conveyances.</p>
            <button>HOW TO PROTECT</button>
        </div>
        <div className="image_container">
            <img src="./src/assets/images/phones.png" />
        </div>
        </div>
         <div className="logo_container">
        <img src="./src/assets/images/b-2.png" alt="timelogo" />
        <img src="./src/assets/images/b-3.png" alt="ceanlogo" />
        <img src="./src/assets/images/b-4.png" alt="alberologo" />
        <img src="./src/assets/images/b-5.png" alt="doralogo" />
        <img src="./src/assets/images/b-6.png" alt="greenlogo" />
        <img src="./src/assets/images/b-2.png" alt="timelogo" />
    </div>
    </main>
   
</body>
</>
  )
}

export default Home