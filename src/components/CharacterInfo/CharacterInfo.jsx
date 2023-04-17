import React from 'react';
import PhotoSkeleton from '../Skeleton/CharacterInfoPhoto';

const CharacterInfo = ({id, name, image, gender, status, species, origin, type, isLoading}) => {

    const originName = origin ? origin.name : "Unknown";
    const blockElements = new Map([
        ["Gender", gender],
        ["Status", status],
        ["Specie", species],
        ["Origin", originName],
        ["Type", type],
    ]);
    console.log(isLoading);
    return (
        <div className='characterInfo'>
            <img className='characterInfo__image' src={isLoading ? <PhotoSkeleton /> : image} alt="infoPhoto" />
            <h2 className='characterInfo__name'>{name}</h2>
            <span className="characterInfo__info">Informations</span>
            <div className="characterInfo__informations">
                {
                    Array.from(blockElements).map(([key, value]) => (
                        <>
                        <div className="characterInfo__informations__block" key={id}>
                            <div className="characterInfo__informations__blockName">{key}</div>
                            <span className="characterInfo__informations__blockSub">{value === '' ? 'Uknown' : value}</span>
                        </div>
                        <div className="characterInfo__line"></div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default CharacterInfo;