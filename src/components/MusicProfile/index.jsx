import React from 'react';

const MusicProfile = (props) => {
  let artist = {
    name: '',
    followers: { total: '' },
    images: [{ url: '' }],
    genres: []
  };

  artist = props.artist !== null ? props.artist : artist;

  return (
    <div>
      <img src={artist.images[0].url} />
      <p>{artist.name}</p>
      <p>{artist.followers.total}</p>
      <div>
        {
          artist.genres.map((genre, index) => {
            genre = genre !== artist.genres[artist.genres.length - 1] ? ` ${genre}, ` : ` & ${genre}`;
            return (
              <span key={index}>{genre}</span>
            )
          })
        }
      </div>
    </div>
  );
};

export default MusicProfile;
