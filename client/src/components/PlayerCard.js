import React from 'react';
// import { useLocalStorage } from '../hooks/useLocalStorage';

const PlayerCard = (props) => {
    

    return (
        <div className="player-card" key={props.player.id}>
            <h4>Name: {props.player.name} </h4>
            <h4>Country: {props.player.country} </h4>
        </div>
    )
}

export default PlayerCard;