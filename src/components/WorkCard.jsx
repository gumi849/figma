import React from 'react';
import './WorkCard.css';

const WorkCard = ({ imageSrc, title, description }) => {
  const [number, ...restTitle] = title.split('. ');

  return (
    <div className="work-card">
      <img src={imageSrc} alt="" />
      <h3>
        <span className="blue">{number}.</span> {restTitle.join('. ')}
      </h3>
      <p>{description}</p>
      <a href="#more-info">Подробнее</a>
    </div>
  );
};

export default WorkCard;
