import React from 'react'
import img from '../inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg'
function Banner() {
    return (
        <div >
            {/* <section className='bg-blue-500 h-[20vh] md:h-[60vh]'>
                <div className='text-3xl md:text-5xl font-bold text-center '>
                    Welcome to IMDB
                </div>
                <div className='text-center text-xl md:text-2xl my-4'>
                    Find the latest movies, TV shows, and celebrities
                </div>
            </section> */}

            <div className='w-full h-[20vh] md:h-[60vh] bg-cover bg-center bg-no-repeat flex items-end'
                style={{
                    backgroundImage: `url(${img})`
                }}>


                <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full'>
                    John Wick
                </div>



            </div>

        </div >

    )
}

export default Banner