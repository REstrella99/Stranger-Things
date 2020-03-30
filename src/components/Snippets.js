import React, { Component } from 'react';
import ListItem from './List/ListItem.js';
import List from './List/List.js';

class Snippets extends Component {
    render() {
        return (
            <List>
                {this.props.data.snippets.map(s => (
                    <ListItem style={{ marginLeft: '5%' }}>
                        {' '}
                        <br />
                        {s}
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default Snippets;
