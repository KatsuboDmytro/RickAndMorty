import React from 'react';
import { Link } from 'react-router-dom';

const Characters = ({name, species, image, id}) => {
    return (
        <>
        <Link to={`/character/${id}`}>
            <div className='card'>
                <img className='card__photo' src={image} alt="character" />
                <div className='card__textBlock'>
                    <span className='card__name'>{name}</span>
                    <span className='card__specie'>{species}</span>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Characters;