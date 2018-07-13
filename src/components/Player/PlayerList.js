import React from 'react'
import PropTypes from 'prop-types'

const PlayerList = ({ title, children }) => (
    <div className="playerList">
        <h3>{title}</h3>
        <main className="playerList__holder">{children}</main>
    </div>
)

PlayerList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default PlayerList
