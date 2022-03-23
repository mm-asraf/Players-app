import React from 'react'

import './Playerlist.css'


const PlayerList = ({ playerData }) => {

    return (
        <div className="container">

            <div className="image">
                <img src={`player-images/${playerData.Id}.jpg`} alt="g" />


            </div>

            <div className="player_details">
                <p>{playerData.PFName}</p>
                <p>{playerData.SkillDesc}</p>
                <p>{playerData.Value}</p>
                <p>{playerData.CCode} vs {playerData.CCode}</p>
                <p>{playerData.MDate}</p>


            </div>

        </div>
    )
}

export default PlayerList