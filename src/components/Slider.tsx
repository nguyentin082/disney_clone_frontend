import { useEffect, useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { FaFire } from 'react-icons/fa6';
import { fetchTrendingMovies } from '../services/Api';
import { IMG_URL } from '../constants/constant';

export type Movie = {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
};

export type MovieResponse = {
    results: Movie[];
};

function Slider() {
    const numberOfSlides = 5;

    // HOOKS
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slideInterval = useRef<number | null>(null);
    const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const getTrendingMovies = async () => {
            const movies: MovieResponse | undefined =
                await fetchTrendingMovies();
            if (movies) {
                console.log(movies.results);
                setTrendingMovies(movies.results); // Only set if movies are defined
            }
        };
        // Run
        getTrendingMovies();
    }, []);

    useEffect(() => {
        slideInterval.current = setInterval(nextSlide, 5000);
        return () => {
            if (slideInterval.current) clearInterval(slideInterval.current);
        };
    }, [currentSlide]);

    // FUNCTIONS
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % numberOfSlides);
    };

    const backSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? numberOfSlides - 1 : prevSlide - 1
        );
    };

    // UI RENDERING
    return (
        <div className="mb-10">
            {/* Title */}
            <div
                // style={customStyles.check}
                className="mx-10 my-5 flex items-center"
            >
                <FaFire className="text-white text-xl mr-2" />
                <h1 className="text-white text-lg">Trending</h1>
            </div>
            {/* Slider */}
            <div
                className="relative rounded-lg w-auto mx-10 h-36 sm:h-56 md:h-64 lg:h-96 flex object-scale-d overflow-hidden hover:cursor-pointer"
                // style={customStyles.check}
            >
                <FaAngleLeft
                    className="absolute w-5 sm:w-7 left-5 h-full text-4xl text-white hover:cursor-pointer z-10"
                    onClick={backSlide}
                    aria-label="Previous Slide"
                />
                <FaAngleRight
                    className="absolute w-5 sm:w-7 right-5 h-full text-4xl text-white hover:cursor-pointer z-10"
                    onClick={nextSlide}
                    aria-label="Next Slide"
                />
                {trendingMovies.map((item: Movie, index: number) => {
                    if (index < numberOfSlides) {
                        return (
                            <div
                                key={index}
                                className={`absolute w-full h-full rounded-lg overflow-hidden transition-transform duration-500 ease-in-out ${
                                    index === currentSlide
                                        ? 'translate-x-0'
                                        : '-translate-x-full'
                                }`}
                                style={{
                                    transform: `translateX(${
                                        100 * (index - currentSlide)
                                    }%)`,
                                    // ...customStyles.check,
                                }}
                            >
                                <img
                                    src={IMG_URL + item.backdrop_path}
                                    alt={item.title}
                                    className="w-full object-cover transition-transform duration-300 transform hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                        );
                    }
                    return null; // Explicitly return null for indices >= 3
                })}
            </div>
        </div>
    );
}

export default Slider;
