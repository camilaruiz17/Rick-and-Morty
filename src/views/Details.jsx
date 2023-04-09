import OneCharacter from '../components/onecharacter/OneCharacter'
import { consultCharacter } from '../services/onecharacter.service'
import { useParams } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Details() {
    const param = useParams()
    const navigate = useNavigate()
    const handleClick=() => {
        navigate('/')
    }

const consultCharacterinternal = () => {
    consultCharacter(param.id)
    .then((response)=>{
        setCharacter(response.data)
    })
}

    const [ character, setCharacter ] = useState([])
        useEffect(()=>{
            if (param.id){
                consultCharacterinternal()
            }
        

    },[param.id]) 
return (
    <div>
        <button onClick={handleClick} type="button" class="btn btn-primary">Back</button>
    <OneCharacter key={character.id} character={character} isDetails/>
    </div>
)
}

export default Details