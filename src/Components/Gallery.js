import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = props => {
  console.log(props);
  let results = props.data;
  let allPhotos;
  if (results.length > 0) {
    allPhotos = results.map(pic => (
      <Photo
        server={pic.server}
        key={pic.id}
        secret={pic.secret}
        id={pic.id}
        farm={pic.farm}
        title={pic.title}
      />
    ));
  } else {
    allPhotos = <NotFound />;
  }
  return (
    <div className="photo-container">
      <h2>{`Results for ${props.query}`}</h2>
      <ul>{allPhotos}</ul>
    </div>
  );
};

export default Gallery;
