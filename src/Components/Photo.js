import React from 'react';

const Photo = props => (
  <li className="gif-wrap">
    <img
      src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`}
      alt={props.title}
    />
    <h2>{props.title}</h2>
  </li>
);

export default Photo;
