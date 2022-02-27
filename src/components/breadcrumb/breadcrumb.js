import React from 'react';
import './breadcrumb.css';

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb row ">
      <div className="col1">
        <p className="line"></p>
      </div>
      <div id="work" className="col2">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
