import React from 'react';
import Breadcrumb from '../breadcrumb/breadcrumb';
import Carousel from '../carousel/carousel';
import './work.css';

const WorkSection = () => {
  return (
    <section className="section-two">
      <div className="container">
        <Breadcrumb name="Work" />
        <h2>Hand-picked projects for you to see</h2>
        <Carousel />
      </div>
    </section>
  );
};

export default WorkSection;
