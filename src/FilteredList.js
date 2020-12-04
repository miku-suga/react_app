import React, {Component} from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import DisplayList from './DisplayList'
import Playlist from './Playlist';



class FilteredList extends Component {
    constructor() {
        super()
        this.state = {
            rate: "All",
            album : "All",
            sortType: "All",
            playlist_items: []
        }

    }

    // When filtering options are clicked, on rate
    onSelectFilterRate = event => {
        this.setState({
            rate: event
        })
    }

    // When filtering options are clicked, on album
    onSelectFilterAlbum = event => {
        this.setState({
            album: event
        })
    }

    // When sorting options are clicked, adjusting the sorting order
    onSelectSortType = event => {
        this.setState({
            sortType: event
        })
    }

    // Filtering function
    matchesFilterRate = item => {
        if (this.state.rate === "All") {
            return true
        } else if (this.state.rate === item.rate_by_me) {
            return true
        } else {
            return false
        }
    }

    // Filtering function
    matchesFilterAlbum = item => {
        if (this.state.album === "All") {
            return true
        } else if (this.state.album === item.album) {
            return true
        } else {
            return false
        }
    }

    // Sorting function
    sortYear = (a, b) => {
        if (this.state.sortType === "asc") {
            return a.year - b.year
        } else if (this.state.sortType === "dsc") {
            return b.year - a.year
        } else {
            return 0
        }
    }

    // Adds unique songs to the playlist, when the "Add to Playlist" button is clicked
    add_to_playlist = item => {
        if (this.state.playlist_items.includes(item) === false) {
            const items = [...this.state.playlist_items, item]
            this.setState({
            playlist_items: items
            })
        }
    }

    // Removes songs from the playlist, when the "Remove" button is clicked
    remove_from_playlist = name => {
        const remaining = this.state.playlist_items.filter(i => name != i.name)
        this.setState({playlist_items: remaining})
    }


    render() {
        return (
            <div>
                {/* The Navigation Bar */}
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Your Taylor Swift Playlist</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <NavDropdown title="Rate by Me" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="All" onSelect={this.onSelectFilterRate}>All</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Good" onSelect={this.onSelectFilterRate}>Good</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Really Good" onSelect={this.onSelectFilterRate}>Really Good</NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown title="Album" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="All" onSelect={this.onSelectFilterAlbum}>All</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Taylor Swift" onSelect={this.onSelectFilterAlbum}>Taylor Swift</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Red" onSelect={this.onSelectFilterAlbum}>Red</NavDropdown.Item>
                            <NavDropdown.Item eventKey="1989" onSelect={this.onSelectFilterAlbum}>1989</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Lover" onSelect={this.onSelectFilterAlbum}>Lover</NavDropdown.Item>
                            <NavDropdown.Item eventKey="Folklore" onSelect={this.onSelectFilterAlbum}>Folklore</NavDropdown.Item>
                        </NavDropdown>
                        

                        <NavDropdown title="Sort Year" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="All" onSelect={this.onSelectSortType}>Reset</NavDropdown.Item>
                            <NavDropdown.Item eventKey="asc" onSelect={this.onSelectSortType}>Old to New</NavDropdown.Item>
                            <NavDropdown.Item eventKey="dsc" onSelect={this.onSelectSortType}>New to Old</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>



                {/* Playlist Component */}
                <Playlist entries={this.state.playlist_items} remove_list={this.remove_from_playlist}/>
                <h1>Your Songs:</h1>

                {/* Songs displayed, using DisplayList Component */}
                <DisplayList list={this.props.list.filter(this.matchesFilterRate).filter(this.matchesFilterAlbum).sort(this.sortYear)} add_list={this.add_to_playlist}/>
                
            
            </div>


        )
    }
}

export default FilteredList