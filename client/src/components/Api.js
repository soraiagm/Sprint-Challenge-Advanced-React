import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard.js';

class Api extends React.Component {
    constructor(){
        super();
            this.state = {
                players: [],
        };
        console.log('Constructor is running');
    }


    componentDidMount(){
        console.log('CDM');
        axios
            .get('http://localhost:5000/api/players')
            .then(response => {
                console.log(response);
                    this.setState({ players: response.data });
            })
            .catch(error => {
                console.log(error);
            }, [this.state.count]);

    }


    render(){
        return(
            <>
                <div className="players-data">
                {this.state.players.map((player, id) => (
                    <PlayerCard key={player.id} player={player} name={player.name} country={player.country}/>
                ))}
                </div>
            </>
        )
    }
    
}

export default Api;