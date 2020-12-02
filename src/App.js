import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetail } from './components/index';

import YoutubeApi from './api/YoutubeApi';

class App extends Component {

  onFormSubmit = async (searchTerm) => {
    const res = await YoutubeApi.get( 'search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyDYVHO98iU5zNYtjtzcIsi9JScIb3coofY',
          q: searchTerm
        }
      }
    )

    console.log(res.data.items);
  }
  
  render() {
    return (
      <Grid justify='center' container style={{ width: '90%', margin: 'auto'}}>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={ this.onFormSubmit } />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* Video List */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
