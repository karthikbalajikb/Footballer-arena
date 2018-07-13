import FootballerService from "../api/FootballersAPI";
import * as ActionTypes from "../constants/ActionTypes";

const receiveFootballers = footballers => ({
  type: ActionTypes.FETCH_ALL_FOOTBALLERS,
  footballers
});

export const fetchAllFootballers = () => dispatch => {
  FootballerService.fetchAllFootballersService().then(footballers => {
    dispatch(receiveFootballers(footballers));
  });
};

const searchByName = (input, footballers) => ({
  type: ActionTypes.SEARCH_BY_NAME,
  payload: { input, footballers }
});

export const filterByName = input => (dispatch, getState) => {
  let footballers = getState().Footballers.footballers;
  dispatch(searchByName(input, footballers));
};

export const addToCart = productId => (dispatch, getState) => {
    console.log("adding to cart:", productId)
};

const receiveProfile = profile => ({
  type: ActionTypes.FETCH_PROFILE_DETAILS,
  profile
});

export const fetchProfile = id => dispatch => {
  console.log("fetchProfile:", id)
  FootballerService.fetchFootballerProfileService(id).then(profile => {
    console.log("service resp",profile);
    dispatch(receiveProfile(profile))
  })
}