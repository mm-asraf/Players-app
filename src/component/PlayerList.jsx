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
                <p className="firstP">{playerData.TName}</p>
                <p className="secp" >SkillDesc: {playerData.SkillDesc}</p>
                <p className="secp" >Value: {playerData.Value}</p>
                <p className="secp" >{playerData.CCode} vs {playerData.UpComingMatchesList[0].VsCCode}</p>
                <p className="secp" >Upcoming Matches: {playerData.UpComingMatchesList[0].MDate}</p>


            </div>

        </div>
    )
}

export default PlayerList