import React, {Component} from 'react';
import { ListGroupItem } from 'react-bootstrap';

import ListGroup from 'react-bootstrap/ListGroup'

var total_minutes = 0
var total_seconds = 0

class Playlist extends Component {
    
    // Creates the playlist in a list format
    createTask = item => {
        return (
            <ListGroup.Item>
                <ListGroupItem>
                {item.name} <br></br>
                Duration: {item.length}
                <button style={{margin:'5px'}} onClick={() => this.props.remove_list(item.name)}>Remove</button>
                </ListGroupItem>
            </ListGroup.Item>
        )
    }

    // Function used to add time values
    calculate_time = item => {
        const time_list = item.length.split(".")
        total_minutes += parseInt(time_list[0])
        total_seconds += parseInt(time_list[1])
        if (total_seconds > 59) {
            total_seconds = total_seconds - 60
            total_minutes += 1
        }
    }

    render() {
        const items = this.props.entries
        const listItems = items.map(this.createTask)
        total_minutes = 0
        total_seconds = 0
        items.map(this.calculate_time)
        return (
            <ListGroup>
                <h4 style={{margin:'20px'}}>
                    Rearrange your playlist!
                </h4>
                <h6 style={{paddingLeft:'20px'}}>
                    Your Playlist Order:
                </h6>
                {listItems}
                <br></br>
                <h6 style={{paddingLeft:'20px'}}>
                Total Time: {total_minutes} minutes {total_seconds} seconds
                </h6>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </ListGroup>
        )
    }

}

export default Playlist