import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './OneCharacter.css'



function OneCharacter({character, isDetails}){
    const [currentCharacter, setCurrentCharacter] = useState(character)
    const navigate = useNavigate();
    const handleRoute = () =>{
        if (!isDetails) {
            navigate('character/'+ character.id);
        }
    }
    useEffect(() => {

            setCurrentCharacter(character)
    }, [character])
    return (
        <div>
            <div>
                <h2>{currentCharacter?.name}</h2>
                <img src={currentCharacter?.image} alt={currentCharacter?.name} className='pic'onClick={handleRoute}></img>
                {isDetails &&
                (
                    <div>
                        <h3>Especie: {currentCharacter?.species}</h3>
                        <h3>Gender: {currentCharacter?.gender}</h3>
                        <h3>Type: {currentCharacter?.type}</h3>
                        <h3>Status: {currentCharacter?.status}</h3>
                        </div>
                )
                
                }
                
            </div>
        </div>
    );
}
export default OneCharacter;