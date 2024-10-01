import { FaIndustry } from 'react-icons/fa6';
import DisneyLogo from '../assets/images/disney.png';
import PixarLogo from '../assets/images/pixar.png';
import MarvelLogo from '../assets/images/marvel.png';
import StarwarLogo from '../assets/images/starwar.png';
import NationGeo from '../assets/images/nationalG.png';
import DisneyVideo from '../assets/videos/disney.mp4';
import PixarVideo from '../assets/videos/pixar.mp4';
import MarvelVideo from '../assets/videos/marvel.mp4';
import StarwarsVideo from '../assets/videos/star-wars.mp4';
import NationGeoVideo from '../assets/videos/national-geographic.mp4';

function Productions() {
    return (
        <div className="mb-10">
            {/* Title */}
            <div
                // style={customStyles.check}
                className="mx-10 my-5 flex items-center"
            >
                <FaIndustry className="text-white text-xl mr-2" />
                <h1 className="text-white text-lg">Production</h1>
            </div>
            {/* Productions */}
            <div
                className="mx-10 flex flex-wrap sm:flex-nowrap gap-0 sm:gap-1 md:gap-5"
                // style={customStyles.check}
            >
                {/* Disney */}
                <div className="relative w-full h-20 sm:h-auto border-2 rounded-lg border-gray-500 hover:cursor-pointer transition-transform duration-300 transform sm:hover:scale-105 wrap-video">
                    <img
                        src={DisneyLogo}
                        alt="Disney Logo"
                        className="z-10 w-auto mx-auto h-full sm:h-auto"
                        // style={customStyles.check}
                    />
                    <video
                        loop
                        muted
                        autoPlay
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-40 z-0"
                    >
                        <source src={DisneyVideo} type="video/mp4" />
                    </video>
                </div>
                {/* Pixar */}
                <div className="relative w-1/2 sm:w-full h-20 sm:h-auto border-2 rounded-lg border-gray-500 hover:cursor-pointer transition-transform duration-300 transform sm:hover:scale-105 wrap-video">
                    <img
                        src={PixarLogo}
                        alt="Pixar Logo"
                        className="z-10 w-auto mx-auto h-full sm:h-auto"
                    />
                    <video
                        loop
                        muted
                        autoPlay
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-40 z-0"
                    >
                        <source src={PixarVideo} type="video/mp4" />
                    </video>
                </div>
                {/* Marvel */}
                <div className="relative w-1/2 sm:w-full h-20 sm:h-auto border-2 rounded-lg border-gray-500 hover:cursor-pointer transition-transform duration-300 transform sm:hover:scale-105 wrap-video">
                    <img
                        src={MarvelLogo}
                        alt="Marvel Logo"
                        className="z-10 w-auto mx-auto h-full sm:h-auto"
                    />
                    <video
                        loop
                        muted
                        autoPlay
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-40 z-0"
                    >
                        <source src={MarvelVideo} type="video/mp4" />
                    </video>
                </div>
                {/* Star Wars */}
                <div className="relative w-1/2 sm:w-full h-20 sm:h-auto border-2 rounded-lg border-gray-500 hover:cursor-pointer transition-transform duration-300 transform sm:hover:scale-105 wrap-video">
                    <img
                        src={StarwarLogo}
                        alt="Star Wars Logo"
                        className="z-10 w-auto mx-auto h-full sm:h-auto"
                    />
                    <video
                        loop
                        muted
                        autoPlay
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-40 z-0"
                    >
                        <source src={StarwarsVideo} type="video/mp4" />
                    </video>
                </div>
                {/* National Geographic */}
                <div className="relative w-1/2 sm:w-full h-20 sm:h-auto border-2 rounded-lg border-gray-500 hover:cursor-pointer transition-transform duration-300 transform sm:hover:scale-105 wrap-video">
                    <img
                        src={NationGeo}
                        alt="National Geographic Logo"
                        className="z-10 w-auto mx-auto h-full sm:h-auto"
                    />
                    <video
                        loop
                        muted
                        autoPlay
                        preload="auto"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 hover:opacity-40 z-0"
                    >
                        <source src={NationGeoVideo} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Productions;
