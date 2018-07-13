import { combineReducers } from "redux";
import {
  FETCH_ALL_FOOTBALLERS,
  SEARCH_BY_NAME,
  FETCH_PROFILE_DETAILS
} from "../constants/ActionTypes";

const footballers = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_FOOTBALLERS: {
      return {
        ...state,
        ...action.footballers.reduce((fullobj, player) => {
          fullobj[player._id] = player;
          return fullobj;
        }, {})
      };
    }
    default:
      return state;
  }
};

const profile = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROFILE_DETAILS: {
      return {
        ...action.profile
      };
    }
    default:
      return state;
  }
};

const FilteredPlayerId = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_FOOTBALLERS:
      return action.footballers.map(prd => prd._id);
    case SEARCH_BY_NAME: {
      let footballers = Object.values(action.payload.footballers);
      let searchTerm = action.payload.input;
      return footballers
        .filter(player => {
          let name = player.Name.toLowerCase();
          return name.includes(searchTerm.toLowerCase());
        })
        .map(p => p._id);
    }
    default:
      return state;
  }
};

export default combineReducers({
  footballers,
  FilteredPlayerId,
  profile
});

export const getfootballersById = (state, pid) => state.footballers[pid];

export const getFilteredfootballers = state => 
   state.FilteredPlayerId.map(pid => getfootballersById(state, pid));

export const getProfileDetails = state => 
  state.profile
