import React from 'react';

// styles
import './Profile.scss';

const Profile = (props) => {
  let artist = {
    name: '',
    followers: { total: '' },
    images: [{ url: '' }],
    genres: []
  };

  artist = props.artist !== null ? props.artist : artist;

  return (
    <div className="music__profile-container">
      <div className="music__profile-container__image">
        <img src={artist.images[0].url} alt="profile-picture" />
      </div>
      <div className="music__profile-container__content">
        <p>{artist.name}</p>
        <p>{artist.followers.total} followers</p>
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
    </div>
  );
};

export default Profile;
