import * as Actions from "../constants/actions";

export fetchArtist = (artist) => ({
  type: Actions.FETCH_ARTIST,
  artist
});

export fetchArtistSuccess = (data) => ({
  type: Actions.FETCH_ARTIST_SUCCESS,
  data
});

export fetchArtistEvents = (artist) => ({
  type: Actions.FETCH_ARTIST_EVENTS,
  artist
});

export fetchArtistEventsSuccess = (data) => ({
  type: Actions.FETCH_ARTIST_EVENTS_SUCCESS,
  data
});

export apiError = () => ({
  type: Action.THROW_API_ERROR,
});
