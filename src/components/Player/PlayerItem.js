import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import './Player.css';

const PlayerURL = (name) => {
    return require(`../../images/${name}.png`);
}

const PlayerItem = ({ player }) => (
        <article className="player">
            <section className="player__image">
                <img src={PlayerURL(player.Name)} width="100%" height="100px" />
            </section>
            <section className="player__description">
                <header className="player__name">{player.Name} </header>
                <div className="player__national">{player.Nationality}</div>
                <div className="player__club">Club : {player.Club} </div>
                <div className="player__position">Position : {player.Preffered_Position}</div>
            </section>
            <button className="player__viewPlayerDetailBtn">
          <NavLink to={`/profile/${player._id}`} className="player__viewPlayerDetailLink"> VIEW PROFILE </NavLink></button>
        </article>
);

PlayerItem.propTypes = {
    player: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Preffered_Position: PropTypes.string.isRequired,
        Club: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        Nationality: PropTypes.string.isRequired,
    }).isRequired,
};

export default PlayerItem;
