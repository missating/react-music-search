// react library
import React from 'react';

//third-party libraries
import SpotifyWebApi from 'spotify-web-api-js';
import { Redirect } from 'react-router-dom';


class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);

    const spotifyApi = new SpotifyWebApi();
    const params = this.getHashParams();
    const token = params.access_token;

    if (token) {
      spotifyApi.setAccessToken(token);
      localStorage.setItem("token", token);
    }

    this.state = {
      loggedIn: token ? true : false,
    }
  }

  getHashParams() {
    const hashParams = {};
    let e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loggedIn
            ? <Redirect to="/search" />
            : <a href='http://localhost:8888'>
              <button>Login with Spotify</button>
            </a>
        }
      </React.Fragment>
    )
  }
}

export default LoginPage;
