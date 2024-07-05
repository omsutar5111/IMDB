import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dceccee14cfac7adec5500d51e72c3e8&language=en-US`)
            .then((res) => {
                console.log(res.data);
                setMovie(res.data);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
            });
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img className="h-48 w-full object-cover md:h-full md:w-48" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{movie.title}</div>
                    <a href={movie.homepage} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{movie.original_title}</a>
                    <p className="mt-2 text-gray-500">{movie.overview}</p>
                    <p className="mt-2 text-gray-500"><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                    <p className="mt-2 text-gray-500"><strong>Release Date:</strong> {movie.release_date}</p>
                    <p className="mt-2 text-gray-500"><strong>Runtime:</strong> {movie.runtime} minutes</p>
                    <p className="mt-2 text-gray-500"><strong>Vote Average:</strong> {movie.vote_average}</p>
                    <p className="mt-2 text-gray-500"><strong>Vote Count:</strong> {movie.vote_count}</p>
                    <p className="mt-2 text-gray-500"><strong>Tagline:</strong> {movie.tagline}</p>
                    <p className="mt-2 text-gray-500"><strong>Production Companies:</strong> {movie.production_companies.map(company => company.name).join(', ')}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
