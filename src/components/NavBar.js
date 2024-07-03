import React from 'react'
import { Link } from 'react-router-dom'
import movieIcon from '../movie-poster.png'
import SearchIcon from '../pantone_514965.png'
function NavBar() {

    return (
        <div className='border py-1 px-1 bg-black relative'>
            <div className='flex items-center'>
                <img src={movieIcon} className='h-8 w-12' alt="Movie Icon" />
                <div className='mx-5 text-white cursor-pointer'>
                    Movies
                </div>
                <div className='mx-5 text-white cursor-pointer'>
                    <Link to="/watchlist"> Watchlist</Link>
                </div>
                <div className='flex items-center mx-4 relative'>
                    <img src={SearchIcon} className='h-6 w-6 mr-3' alt="Search Icon" />
                    <input
                        type='text'
                        className='bg-white mr-2 text-black border-b-2 border-white rounded-md px-2 py-0 h-auto w-auto sm:w-12 md:w-40 lg:w-64'
                        placeholder='Search ...'
                    />
                </div>
                <div className=' flex ml-auto text-white cursor-pointer mr-10'>
                    Login
                </div>

            </div>
        </div>
    )
}

export default NavBar