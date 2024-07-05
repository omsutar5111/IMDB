import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MovieDetail from './MovieComponents/MovieDetail';
import Pagination from './Pagination';

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer text-black" onClick={onClick}>
            <FaChevronRight size={20} />
        </div>
    );
}

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer mr-1 text-black" onClick={onClick}>
            <FaChevronLeft size={20} />
        </div>
    );
}
function Movies() {
    const [movies, setMovies] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const navigate = useNavigate();

    // Pagination handlers
    const onNext = () => {
        setPageNum(pageNum + 1);
    };

    const onPrev = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
    };
    useEffect(() => {
        (function () {
            axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=dceccee14cfac7adec5500d51e72c3e8&language=en-US&sort_by=popularity.desc&page=${pageNum}`)
                .then((res) => {
                    console.log(res.data);
                    setMovies(res.data.results);
                })

                .catch((error) => {
                    console.error("Error fetching data:", error);
                });

        })();

    }, [pageNum]);

    const handleMovieClick = (id) => {
        navigate(`/movie/${id}`);
    };


    // const fetchMovieDetails = (id) => {
    //     axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dceccee14cfac7adec5500d51e72c3e8&language=en-US`)
    //         .then((res) => {
    //             console.log("Movie details:", res.data);
    //             setSelectedMovie(res.data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching movie details:", error);
    //         });
    // };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <div className="text-2xl mb-8 font-bold text-center">Trending Movies</div>

            <div >
                <Slider {...settings}>
                    {movies.map((movie) => (
                        <div key={movie.id} className='px-2'>
                            <div
                                className='w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[200px] hover:scale-110 duration-300 relative flex items-center cursor-pointer'
                                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
                                onClick={() => handleMovieClick(movie.id)}>
                                <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">
                                    {movie.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
            <Pagination
                pageNumProp={pageNum}
                onNextProp={onNext}
                onPrevProp={onPrev}
            ></Pagination>
            {selectedMovie && <MovieDetail movie={selectedMovie} />}
        </div>

    )
}

export default Movies