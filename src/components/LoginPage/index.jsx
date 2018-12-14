// react library
import React from 'react';

//third-party libraries
import SpotifyWebApi from 'spotify-web-api-js';
import { Redirect } from 'react-router-dom';

// styles
import './LoginPage.scss';

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
      <div className="login__container">
        {
          this.state.loggedIn
            ? <Redirect to="/search" />
            : <div className="login__container__content">
              <a href='http://localhost:8888'>
                <button className="login__container__btn">
                  Connect To Spotify
                </button>
              </a>
              <h2 className="login__container__intro-text">
                Where Music happens
              </h2>
            </div>
        }
      </div>
    )
  }
}

export default LoginPage;
