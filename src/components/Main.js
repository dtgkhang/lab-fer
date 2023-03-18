import React, { Component } from 'react'
import { Films } from '../share/ListOfFilms';
import FilmsPresentation from './films/FilmPresentation'
import Header from './header/Header';
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      films: Films
    };
  }
  render() {
    return <div>
      <Header />
      <FilmsPresentation films={this.state.films} />
    </div>
  }
}
