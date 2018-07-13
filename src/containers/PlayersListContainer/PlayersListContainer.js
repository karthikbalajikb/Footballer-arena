import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilteredfootballers } from '../../reducers/footballers';
import PlayerItem from '../../components/Player/PlayerItem';
import PlayerList from '../../components/Player/PlayerList';

const PlayerListContainer = ({ footballers }) => (
    <PlayerList title="Players List">
        {footballers.map(footballer =>
            <PlayerItem
                key={footballer._id}
                player={footballer} />
        )}
    </PlayerList>
);

PlayerListContainer.propTypes = {
    footballers: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Preffered_Position: PropTypes.string.isRequired,
        Club: PropTypes.string.isRequired,
        Name: PropTypes.string.isRequired,
        Nationality: PropTypes.string.isRequired,
    })).isRequired,
};

const mapPropsToState = state => ({
    footballers: getFilteredfootballers(state.Footballers),
});

export default connect(mapPropsToState)(PlayerListContainer);
