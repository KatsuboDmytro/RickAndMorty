import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import CharacterInfo from "../components/CharacterInfo";
import backArrow from '../assets/backArrow.svg'
import { getCharacterById } from '../APIdata/CharactersAPI';

const CharacterInfoPage = () => {
    const {id} = useParams();
    const [character, setCharacter] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function getById(){
            setIsLoading(true);
            try {
                const character = await getCharacterById(id);
                setCharacter(character);
                setIsLoading(false);
            } catch (error) {
                console.error('Error getting character by id', error);
                setIsLoading(false);
            }
        }
        getById();
    },[id]);

    return (
        <>
            <Link to={'/'}>
                <div className='goBack'>
                    <img className='goBack__img' src={backArrow} alt="backArrow" />
                    <span className='goBack__text'>Go back</span>
                </div>
            </Link>
            <CharacterInfo {...character} isLoading={isLoading}/>
        </>
    )
}

export default CharacterInfoPage;