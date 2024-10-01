import axios from 'axios';
import { API_URL } from '../constants/constant';

export async function fetchTrendingMovies() {
    try {
        const response = await axios.get(
            `${API_URL}/trending/movie/day?&language=en-US&page=1`,
            {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${
                        import.meta.env.VITE_ACCESS_TOKEN
                    }`,
                },
            }
        );
        return response.data; // Return the data
    } catch (e) {
        console.error('Error:', e);
        return undefined; // Return undefined on error
    }
}

export async function fetchMovieListsByGenerId(gener_id: number) {
    try {
        const response = await axios.get(
            `${API_URL}/discover/movie?with_genres=${gener_id}&language=en-US&sort_by=popularity.desc&include_adult=true&page=1`,
            {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${
                        import.meta.env.VITE_ACCESS_TOKEN
                    }`,
                },
            }
        );
        return response.data; // Return the data
    } catch (e) {
        console.error('Error:', e);
        return undefined; // Return undefined on error
    }
}
