import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import FilteredList from './FilteredList'
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing images
import cardigan from "./cardigan.jpg"
import mine from "./mine.jpg"
import dynasty from "./dynasty.jpg"
import atw from "./all_too_well.jpg"
import cruelsummer from "./cruel_summer.jpg"
import style from "./style.jpg"
import lover from "./lover.jpg"
import me from "./me.jpg"
import theone from "./the_one.jpg"
import clean from "./clean.jpg"
import tog from "./tog.jpg"
import oursong from "./our_song.jpg"

// Current songs in the system, and their descriptions
const songs_list = [
  {name: "Cardigan", year: "2020", album: "Folklore", rate_by_me: "Good", length: "3.59", image: cardigan},
  {name: "Mine", year: "2010", album: "Speak Now", rate_by_me: "Good", length: "3.52", image: mine},
  {name: "The Last Great American Dynasty", year: "2020", album: "Folklore", rate_by_me: "Really Good", length: "3.51", image: dynasty},
  {name: "All Too Well", year: "2012", album: "Red", rate_by_me: "Really Good", length: "5.28", image: atw},
  {name: "Cruel Summer", year: "2019", album: "Lover", rate_by_me: "Good", length: "2.58", image: cruelsummer},
  {name: "Style", year: "2015", album: "1989", rate_by_me: "Really Good", length: "3.51", image: style},
  {name: "Lover", year: "2019", album: "Lover", rate_by_me: "Really Good", length: "3.41", image: lover},
  {name: "Me!", year: "2018", album: "Lover", rate_by_me: "Good", length: "3.13", image: me},
  {name: "The 1", year: "2020", album: "Folklore", rate_by_me: "Good", length: "3.30", image: theone},
  {name: "Clean", year: "2015", album: "1989", rate_by_me: "Good", length: "4.31", image: clean},
  {name: "Teardrops On My Guitar", year: "2007", album: "Taylor Swift", rate_by_me: "Good", length: "3.35", image: tog},
  {name: "Our Song", year: "2007", album: "Taylor Swift", rate_by_me: "Really Good", length: "3.24", image: oursong}
]

// Main App Component
class App extends Component {
  render() {
    return (
      <div>
        <FilteredList list={songs_list} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
