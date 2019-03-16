import React from 'react';

// styles
import './SearchPage.scss';

// components
import MusicProfile from '../MusicProfile';

class SearchPage extends React.PureComponent {
  state = {
    searchQuery: '',
    artist: null,
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
    const baseUrl = "https://api.spotify.com/v1/search?"
    const fetchUrl = `${baseUrl}q=${this.state.searchQuery}&type=artist&limit=1`
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
        this.setState({ artist })
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
            placeholder="Search for Music by title"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            onKeyPress={this.onKeyPress}
          />
          <button
            className="container__search-bar__btn"
            onClick={() => this.onSearch()}
          >
            Submit
          </button>
        </div>

        <MusicProfile
          artist={this.state.artist}
        />
      </div>
    )
  }
}

export default SearchPage;
