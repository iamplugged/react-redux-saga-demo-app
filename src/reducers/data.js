import * as Actions from "../constants/actions";

const initialState = {
  artist: {},
  artistEvents: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH_ARTIST_SUCCESS: {
      return Object.assign({}, state, {
        artist: action.payload
      });
    }

    case Action.FETCH_ARTIST_EVENTS_SUCCESS: {
      return Object.assign({}, state, {
        artistEvents: action.payload
      });
    }

    default: {
      return state;
    }
  }
};

export default dataReducer;
