import React from 'react'

import './Playerlist.css'


const PlayerList = ({ playerData }) => {

    return (
        <div className="container">

            <div className="image">
                <img src={`player-images/${playerData.Id}.jpg`} alt="g" />


            </div>

            <div className="player_details">
                <h3>{playerData.PFName}</h3>
                <h3>{playerData.TName}</h3>
                <p>SkillDesc: {playerData.SkillDesc}</p>
                <p>Value: {playerData.Value}</p>
                <p>{playerData.CCode} vs {playerData.CCode}</p>
                <p>Upcoming Matches: {playerData.MDate}</p>


            </div>

        </div>
    )
}

export default PlayerList