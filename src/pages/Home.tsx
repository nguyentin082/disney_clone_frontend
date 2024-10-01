import { useRef } from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Productions from '../components/Productions';
import MovieListPoster from '../components/MovieListPoster';
import {
    FaBolt,
    FaCompass,
    FaPalette,
    FaFaceLaughBeam,
    FaHandcuffs,
    FaVideo,
    FaPeopleGroup,
    FaLandmark,
    FaGhost,
    FaMusic,
    FaUserSecret,
    FaHeart,
    FaRobot,
    FaTv,
    FaSkullCrossbones,
} from 'react-icons/fa6';
import MovieListBackdrop from '../components/MovieListBackdrop';

// Genre list with corresponding Font Awesome icons
const genres = [
    {
        id: 28,
        name: 'Action',
        icon: <FaBolt className="text-white text-xl mr-2" />,
    },
    {
        id: 12,
        name: 'Adventure',
        icon: <FaCompass className="text-white text-xl mr-2" />,
    },
    {
        id: 16,
        name: 'Animation',
        icon: <FaPalette className="text-white text-xl mr-2" />,
    },
    {
        id: 35,
        name: 'Comedy',
        icon: <FaFaceLaughBeam className="text-white text-xl mr-2" />,
    },
    {
        id: 80,
        name: 'Crime',
        icon: <FaHandcuffs className="text-white text-xl mr-2" />,
    },
    {
        id: 99,
        name: 'Documentary',
        icon: <FaVideo className="text-white text-xl mr-2" />,
    },

    {
        id: 10751,
        name: 'Family',
        icon: <FaPeopleGroup className="text-white text-xl mr-2" />,
    },
    {
        id: 36,
        name: 'History',
        icon: <FaLandmark className="text-white text-xl mr-2" />,
    },
    {
        id: 27,
        name: 'Horror',
        icon: <FaGhost className="text-white text-xl mr-2" />,
    },
    {
        id: 10402,
        name: 'Music',
        icon: <FaMusic className="text-white text-xl mr-2" />,
    },
    {
        id: 9648,
        name: 'Mystery',
        icon: <FaUserSecret className="text-white text-xl mr-2" />,
    },
    {
        id: 10749,
        name: 'Romance',
        icon: <FaHeart className="text-white text-xl mr-2" />,
    },
    {
        id: 878,
        name: 'Science Fiction',
        icon: <FaRobot className="text-white text-xl mr-2" />,
    },
    {
        id: 10770,
        name: 'TV Movie',
        icon: <FaTv className="text-white text-xl mr-2" />,
    },
    {
        id: 53,
        name: 'Thriller',
        icon: <FaSkullCrossbones className="text-white text-xl mr-2" />,
    },
];

type GenreType = {
    id: number;
    name: string;
    icon: JSX.Element; // Font Awesome icon type
};

function Home() {
    const activeGenres = useRef<GenreType[]>(genres);

    return (
        <div>
            <Header />
            <Slider />
            <Productions />

            {/* Dynamically render MovieListPoster with respective icons */}
            {activeGenres.current.map((genre, index) =>
                index % 4 === 0 ? (
                    <MovieListBackdrop
                        key={genre.id}
                        icon={genre.icon} // Pass the icon dynamically
                        title={genre.name} // Using genre name as title
                        gener_id={genre.id} // Pass genre ID
                    />
                ) : (
                    <MovieListPoster
                        key={genre.id}
                        icon={genre.icon} // Pass the icon dynamically
                        title={genre.name} // Using genre name as title
                        gener_id={genre.id} // Pass genre ID
                    />
                )
            )}
        </div>
    );
}

export default Home;
