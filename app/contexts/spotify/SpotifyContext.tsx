import React from 'react';

import Context from './CreateContext';

export class SpotifyProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSongData: {
        album: 'Swimming',
        artist: 'Mac Miller',
        image: 'swimming',
        length: 312,
        title: 'So It Goes'
      },
      isLoading: true,
      showMusicBar: true
    };

    this.updateState = this.updateState.bind(this);
  }

  updateState(key, value) {
    this.setState({
      [key]: value
    });
  };

  render() {
    const { children } = this.props;

    const { currentSongData, isLoading, showMusicBar } = this.state;

    return (
      <Context.Provider
        value={{
          currentSongData,
          isLoading,
          showMusicBar,
          updateState: this.updateState
        }}
      >
        {children}
      </Context.Provider>
    );
  }
};