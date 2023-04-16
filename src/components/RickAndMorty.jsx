import React from "react";

import logo from '../assets/logoRickAndMorty.png';
import find from '../assets/LeadingIcon.png'
import Characters from './Characaters/Characters';

const RickAndMorty = ({ characterArr, isLoading, setSearchParams }) => {
    console.log(characterArr);
    const [searchValue, setSearchValue] = React.useState('');
    const sortedCharacters = characterArr && characterArr.sort((a, b) => a.name.localeCompare(b.name));
    
    const findByName = (event) => {
		setSearchValue(event.target.value);
	};
    console.log(searchValue);

    return (
        <div className='sitcom'>
            <img className='sitcom__logo' src={logo} alt="logoRickAndMorty" />
            <div className='sitcom__findByName'>
                <input className='sitcom__find' onChange={findByName} value={searchValue} type="text" placeholder='Filter by name...' />
                <img className='sitcom__findIcon' src={find} alt="LeadingIcon" />
            </div>
            <div className='sitcom__characters'>
                {
                    sortedCharacters
                    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(item => <Characters key={item.id} {...item}/>)
                }
            </div>
        </div>
    )
}

export default RickAndMorty;