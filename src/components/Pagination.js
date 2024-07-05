import React from 'react';

function Pagination(props) {
    let { pageNumProp, onNextProp, onPrevProp } = props;
    return (
        <div className='flex  items-center justify-center'>
            <button onClick={onPrevProp} className='  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Previous</button>
            <button className='  px-2 items-center m-4'>{pageNumProp}</button>
            <button onClick={onNextProp} className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Next</button>
        </div>
    )
}

export default Pagination