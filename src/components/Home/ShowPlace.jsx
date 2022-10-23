import React from 'react';
import { Link } from 'react-router-dom';
import "./ShowPlace.css"

const ShowPlace = ({place}) => {
    const {id,img, name} = place;
    return (
        <div className='card-place'>
            <Link to={`/places/${id}`}>
                <img src={img} alt="" />
                <h3>{name}</h3>
            </Link>
        </div>
    );
};

export default ShowPlace;