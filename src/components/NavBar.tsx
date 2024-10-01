import { FaHouseChimney } from 'react-icons/fa6';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaListUl } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa6';
import { FaFilm } from 'react-icons/fa6';
import { FaTv } from 'react-icons/fa6';
import { FaEllipsisVertical } from 'react-icons/fa6';
// import customStyles from '../constants/styleCheck';
import { useState } from 'react';

function NavBar() {
    const [toggle, setToggle] = useState<boolean>(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <>
            <div className="flex-1 flex flex-row justify-around md:mr-10">
                <div className="relative group text-white flex items-center hover:cursor-pointer">
                    <FaHouseChimney className="text-xl md:text-2xl lg:text-xl" />
                    <span className="ml-2 text-sm lg:block hidden">HOME</span>
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                </div>
                <div className="relative group text-white flex items-center hover:cursor-pointer">
                    <FaMagnifyingGlass className="text-xl lg:text-xl" />
                    <span className="ml-2 text-sm lg:block hidden">SEARCH</span>
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                </div>
                <div className="relative group text-white flex items-center hover:cursor-pointer hidden md:flex">
                    <FaListUl className="text-xl lg:text-xl" />
                    <span className="ml-2 text-sm lg:block hidden">
                        WATCH LIST
                    </span>
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                </div>
                <div className="relative group text-white items-center hover:cursor-pointer hidden md:flex">
                    <FaStar className="text-2xl lg:text-xl" />
                    <span className="ml-2 text-sm lg:block hidden">
                        ORIGINALS
                    </span>
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                </div>
                <div className="relative group text-white items-center hover:cursor-pointer hidden md:flex">
                    <FaTv className="text-2xl lg:text-xl" />
                    <span className="ml-2 text-sm lg:block hidden">MOVIES</span>
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                </div>
                <div className="relative group text-white items-center hover:cursor-pointer hidden md:flex">
                    <FaFilm className="text-2xl lg:text-xl" />
                    <span className="ml-2 text-sm lg:block hidden">SERIES</span>
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                </div>
                <div
                    className="relative group text-white flex items-center hover:cursor-pointer md:hidden"
                    onClick={handleToggle}
                >
                    <FaEllipsisVertical className="text-xl lg:text-xl" />
                    <div className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full lg:block hidden"></div>
                    {/* More table */}
                    {toggle && (
                        <div className="absolute top-10 left-[-60px] border border-gray-600 bg-slate-800 rounded-lg p-4 space-y-6 w-36 animate-fade ease-in-out z-50">
                            <div className="text-white flex">
                                <FaListUl className="text-xl lg:text-xl" />
                                <span className="ml-2 text-sm">WATCH LIST</span>
                            </div>
                            <div className="text-white flex">
                                <FaStar className="text-xl lg:text-xl" />
                                <span className="ml-2 text-sm">ORIGINALS</span>
                            </div>
                            <div className="text-white flex">
                                <FaTv className="text-xl lg:text-xl" />
                                <span className="ml-2 text-sm">MOVIES</span>
                            </div>
                            <div className="text-white flex">
                                <FaFilm className="text-xl lg:text-xl" />
                                <span className="ml-2 text-sm">SERIES</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default NavBar;
