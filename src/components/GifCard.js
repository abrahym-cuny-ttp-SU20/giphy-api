import React, { Component } from 'react';
import '../styles/GitCard.css';

class GifCard extends Component {
    render() {
       return (<img className="gif-img" src={this.props.url} alt={this.props.title}/>);
    }
}
export default GifCard;