import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './AllCharacter.css'
import OneCharacter from '../onecharacter/OneCharacter'
import { allCharacter } from '../../services/allcharacter.service'

function Navpage(){
    return (
        <header classname="d-flex justify-content-between">
            <p>page 1</p>
            <button classname="btn btn-primary btn-sm">Page 2</button>
        </header>
    )
}

    function AllCharacters() {
        const [ characters, setCharacters] = useState([])
        useEffect(() =>{
    allCharacter().then(
        response=>{
            setCharacters(response.data.results)
        }
    )

    },[])

    return (
    
            
        <div>
        {characters.map((character)=>{

            return(

    <OneCharacter key={character.id} character={character} isDetails={false}/>
    
    )
    })}
    </div> 

);
}
export default AllCharacters