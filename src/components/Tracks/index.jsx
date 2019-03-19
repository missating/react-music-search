import React from 'react';

// styles
import './Tracks.scss';

class Tracks extends React.Component {
  state = {
    audioUrl: '',
    audio: null,
    playing: false
  }

  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    if (!this.state.playing) {
      audio.play();
      this.setState({
        playing: true,
        audioUrl: previewUrl,
        audio
      })
    } else {
      if (this.state.audioUrl === previewUrl) {
        this.state.audio.pause();
        this.setState({
          playing: false
        })
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playing: true,
          audioUrl: previewUrl,
          audio
        })
      }
    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <React.Fragment>
        {
          tracks.length > 0 && <h2 className="tracks__heading">Preview Tracks</h2>
        }
        <div className="tracks__container">
          {
            tracks.map((track, index) => {
              const trackIcon = track.album.images[0].url;
              return (
                <div key={index} onClick={() => this.playAudio(track.preview_url)}>
                  <img src={trackIcon} alt="track-icon" />
                  <p>{track.name}</p>
                  <div>
                    {
                      this.state.audioUrl === track.preview_url ? <span>||</span> : <span>&#9654;</span>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Tracks;
