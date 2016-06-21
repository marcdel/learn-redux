import React from 'react';

import Photo from './Photo';

export default class PhotoGrid extends React.Component {
  render(){
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, index) => <Photo key={index} index={index} post={post} {...this.props} />)}
      </div>
    );
  }
}
