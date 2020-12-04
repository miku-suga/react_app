import React, {Component} from 'react';


class DisplayList extends Component {
    

    render() {
        return (
            <div>
                {/* Displays the songs in the list format */}
                {this.props.list.map(item =>
                    <li>
                        <h2 style={{paddingLeft:'20px'}}>
                        {item.name}
                        </h2>
                        <h4 style={{paddingLeft:'20px'}}>
                        {item.album}
                        </h4>

                        <img src={item.image} height={200} width={200} style={{paddingLeft:'10px'}}/>

                        <h6 style={{paddingLeft:'20px'}}>
                            Year released: {item.year}
                        </h6>
                        <h6 style={{paddingLeft:'20px'}}>
                            Rate by me: {item.rate_by_me}
                        </h6>
                        <h6 style={{paddingLeft:'20px'}}>
                            Duration: {item.length}
                        </h6>
                        <button style={{margin:'20px'}} onClick={() => this.props.add_list(item)}>Add to Playlist</button>
                        <br>
                        </br>
                        _____________________________________________________
                    </li>


                )}
            </div>
        )
    }
}

export default DisplayList