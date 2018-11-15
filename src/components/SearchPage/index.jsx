import React from 'react';

// styles
import './SearchPage.scss';

class SearchPage extends React.PureComponent {
  state = {
    searchQuery: '',
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
    const fetchUrl = `${baseUrl}q=${this.state.searchQuery}&type=artist,album,track&limit=1`
    fetch(fetchUrl, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      cache: 'default'
    })
      .then(response => response.json())
      .then(json => console.log('=========', json))
  }

  render() {
    return (
      <div className="container">
        <div className="container__heading">Music Finder</div>
        <div className="container__search-bar">
          <input
            type="text"
            className="container__search-bar__content"
            placeholder="Search..."
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            onKeyPress={this.onKeyPress}
          />
          <button
            className="container__search-bar__btn"
            onClick={() => this.onSearch()}
          >
            Search
          </button>
        </div>
      </div>
    )
  }
}

export default SearchPage;
