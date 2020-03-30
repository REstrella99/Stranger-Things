import React, { Component } from 'react';
import ListItem from './List/ListItem.js';
import List from './List/List.js';

class Locations extends Component {
    render() {
        return (
            <List>
                {this.props.data.locations.map(s => (
                    <ListItem style={{ color: 'black' }}>{s}</ListItem>
                ))}
            </List>
        );
    }
}
export default Locations;
