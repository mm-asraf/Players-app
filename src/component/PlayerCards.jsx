import React, { useEffect, useState } from 'react'
import PlayerList from './PlayerList';
import './Playerlist.css'


const PlayerCards = () => {

    const [players, setPlayers] = useState([])
    const [allPlayers, setAllPlayers] = useState([])

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
            setAllPlayers(playerData)


        })()

    }, [])


    const filter = (event) => {
        const val = event.target.value.toLowerCase()
        const filterbyName = allPlayers.filter(
            player => (`${player.PFName} ${player.PDName}`.toLowerCase().includes(val)

            )
        )
        setPlayers(filterbyName)
    }

    return (

        <div className='cards-container'>
            <h1>Players Details</h1>
            <input className="search-box" placeholder="Search Your Player..." onInput={filter} />

            {players.map((player, index) => {
                return (
                    <PlayerList playerData={player} key={index} />
                )
            })}

        </div>
    )
}

export default PlayerCards