// import customStyles from '../constants/styleCheck';
import WebLogo from '../assets/images/logo.png';
import UserAvatar from '../assets/images/avatar.png';
import NavBar from './NavBar';

function Header() {
    return (
        <div className="flex mx-5 my-5 items-center mb-10">
            {/* WEB LOGO */}
            <img
                src={WebLogo}
                className="object-scale-down w-28 hover:cursor-pointer"
            />
            {/* NAVBAR */}
            <NavBar />
            {/* USER ACCOUNT IMAGE */}
            <img
                src={UserAvatar}
                className="object-cover w-10 h-10 lg:w-12 lg:h-12 rounded-full hover:cursor-pointer"
            />
        </div>
    );
}

export default Header;
