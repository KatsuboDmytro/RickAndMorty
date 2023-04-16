import React from 'react';

const Characters = ({name, species, image}) => {
    return (
        <div className='card'>
            <img className='card__photo' src={image} alt="character" />
            <div className='card__textBlock'>
                <span className='card__name'>{name}</span>
                <span className='card__specie'>{species}</span>
            </div>
        </div>
    )
}

export default Characters;