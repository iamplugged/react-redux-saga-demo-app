import React from "react";
import { connect } from "react-redux";

import "../styles/index.css";

import Body from "../components/Body";

import * as Actions from "../actions/actions";

const App = (props) => (
  <div></div>
);

const mapStateToProps = ({ data }) => ({
  artists: data.artists
});

const mapDispatchToProps = (dispatch) => ({
  fetchArtist: (payload) => { dispatch(Actions.fetchArtist(payload)) },
  fetchArtistEvents: (payload) => { dispatch(Actions.fetchArtistEvents(payload)) },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
