import React, { useEffect, useState } from 'react'
import PlayerList from './PlayerList';

const PlayerCards = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {

        (async () => {
            let playerData;

            try {
                const res = await fetch('https://api.npoint.io/20c1afef1661881ddc9c')
                playerData = (await res.json()).playerList;
            } catch (err) {
                console.log(err)
                playerData = [];
            }

            setPlayers(playerData)


        })()

    }, [])


    return (

        <div className='card'>

            {players.map((player, index) => {
                return (
                    <PlayerList playerData={player} key={index} />
                )
            })}

        </div>
    )
}

export default PlayerCards