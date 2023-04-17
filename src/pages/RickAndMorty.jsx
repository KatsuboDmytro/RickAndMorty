import React from "react";
import { useSearchParams } from "react-router-dom";

import RickAndMorty from "../components/RickAndMorty";
import { getCharacters } from "../APIdata/CharactersAPI";

const RickAndMortyPage = () => {
    const [characterArr, setCharacterArr] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    React.useEffect(() => {
        async function fetchCharacters(){
            setIsLoading(true);
            try {
                const characters = await getCharacters(searchParams);
                setCharacterArr(characters);
                setIsLoading(false);
            } catch (error) {
                console.error('Error in fetching characters');
                setIsLoading(false);
                setCharacterArr(null);
            }
        };
        fetchCharacters();
    },[searchParams]);

    return(
        <RickAndMorty 
        characterArr={characterArr} 
        isLoading={isLoading} 
        setSearchParams={setSearchParams}/>
    )
};

export default RickAndMortyPage;