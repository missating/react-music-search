import React from 'react';

// styles
import './SearchPage.scss';

// components
import Profile from '../Profile';
import Tracks from '../Tracks';

class SearchPage extends React.PureComponent {
  state = {
    searchQuery: '',
    artist: null,
    tracks: []
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.onSearch()
    }
  }

  onSearch = () => {
    const baseUrl = "https://api.spotify.com/v1/search?";
    let fetchUrl = `${baseUrl}q=${this.state.searchQuery}&type=artist&limit=1`;
    const albumUrl = 'https://api.spotify.com/v1/artists/';

    fetch(fetchUrl, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      cache: 'default'
    })
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0]
        this.setState({ artist });

        fetchUrl = `${albumUrl}${artist.id}/top-tracks?country=US&`
        fetch(fetchUrl, {
          method: 'GET',
          mode: "cors",
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          cache: 'default'
        })
          .then(response => response.json())
          .then(json => {
            const { tracks } = json;
            this.setState({ tracks });
          })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="container__heading">Music Finder</div>
        <div className="container__search-bar">
          <input
            type="text"
            className="container__search-bar__content"
            placeholder="Search for Music by: Artist name"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            onKeyPress={this.onKeyPress}
          />
          <button
            className="container__search-bar__btn"
            onClick={() => this.onSearch()}
          />
        </div>
        {
          this.state.artist &&
          <Profile
            artist={this.state.artist}
          />
        }
        <Tracks
          tracks={this.state.tracks}
        />
      </div>
    )
  }
}

export default SearchPage;
