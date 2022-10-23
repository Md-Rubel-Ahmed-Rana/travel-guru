import React from 'react';
import useFetch from '../../hooks/useFetch';
import ShowPlace from './ShowPlace';

const Home = () => {
    const places = useFetch();
    
    return (
        <div className='d-flex'>
            <div className='card-place'>
                <h2>Hello</h2>
            </div>
            <div  className='d-flex'>
                {
                places.map((place) => <ShowPlace place={place}  key={place.id} /> )
                }
            </div>
        </div>
    );
};

export default Home;