import React, { Component } from 'react';
import './thumbnail.scss';

export default class Thumbnail extends Component {

  state = {
    data: [
      {
        name: 'Movie1',
        genre: 'Comedy'
      },
      {
        name: 'Movie2',
        genre: 'Action'
      },
      {
        name: 'Movie3',
        genre: 'Thriller'
      },
      {
        name: 'Movie4',
        genre: 'Drama'
      },
      {
        name: 'Movie5',
        genre: 'Comedy'
      },
      {
        name: 'Movie6',
        genre: 'Action'
      },
      {
        name: 'Movie7',
        genre: 'Thriller'
      },
      {
        name: 'Movie8',
        genre: 'Drama'
      },
      {
        name: 'Movie9',
        genre: 'Comedy'
      },
      {
        name: 'Movie10',
        genre: 'Action'
      },
      {
        name: 'Movie11',
        genre: 'Thriller'
      },
      {
        name: 'Movie12',
        genre: 'Drama'
      },
      {
        name: 'Movie13',
        genre: 'Comedy'
      },
      {
        name: 'Movie14',
        genre: 'Action'
      },
      {
        name: 'Movie15',
        genre: 'Thriller'
      },
      {
        name: 'Movie16',
        genre: 'Drama'
      },
    ],
    selectedBlock: -1,
  }

  openBlock = (position) => {
    console.log("Inside the open block function");

    this.setState({
      selectedBlock: position
    });

  }

  render() {
    const { data, selectedBlock } = this.state;

    const movieList = data.map(({ name, genre }, index) => {
      if (selectedBlock == index) {
        return (
          <div
          className='col col-lg-3 col-md-6 col-sm-12 normal_blocks active_movie_blocks'
          key={name}
          onClick={()=>this.openBlock(index)}
          >
            <div className="movie_blocks">
              {name}
            </div>
            <div className="extended_block">
              <div className="inside_extended_block">

              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div
          className='col col-lg-3 col-md-6 col-sm-12 normal_blocks'
          key={name}
          onClick={()=>this.openBlock(index)}
          >
            <div className="movie_blocks">
              {name}
            </div>
          </div>
        );
      }
    });

    return (
      <div className="container">
        <div className="row upper_level">
          { movieList }
        </div>
      </div>
    );
  }
}
