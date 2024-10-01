import { ReactNode, useEffect, useState } from 'react';
import { fetchMovieListsByGenerId } from '../services/Api';
import { IMG_URL } from '../constants/constant';
import { Movie } from './Slider';

function MovieListPoster({
    gener_id,
    icon,
    title,
}: {
    gener_id: number;
    icon: ReactNode;
    title: string;
}) {
    // HOOKS
    const [movieList, setMovieList] = useState<[]>([]);

    useEffect(() => {
        const getMovieListsByGenerId = async () => {
            const movies = await fetchMovieListsByGenerId(gener_id);
            if (movies) {
                // console.log(movies.results);
                setMovieList(movies.results); // Only set if movies are defined
            }
        };
        // Run
        getMovieListsByGenerId();
    }, [gener_id]);

    if (!movieList || movieList.length === 0) {
        return <div>No data available for movie list</div>;
    }

    return (
        <div className="mb-10">
            {/* Title */}
            <div
                // style={customStyles.check}
                className="mx-10 my-5 flex items-center"
            >
                {icon}
                <h1 className="text-white text-lg">{title}</h1>
            </div>
            {/* List */}
            <div
                className="mx-10 flex overflow-x-auto space-x-4 py-4 scrollbar-hide"
                // Custom styles removed, replaced with Tailwind CSS
            >
                {movieList.map((movie: Movie, index: number) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-40 relative" // Each item has a fixed width and won't shrink
                    >
                        <img
                            src={`${IMG_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto rounded-lg hover:cursor-pointer hover:border-gray-200 border-transparent border-2 transition duration-200" // Make the image fully responsive with rounded corners
                        />
                        <p className="text-white mt-2 text-sm text-center">
                            {movie.title}
                        </p>{' '}
                        {/* Center align the movie title */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieListPoster;
