import React from 'react';
import './WorksBlock.css';
import WorkCard from './WorkCard';

const works = [
  {
    imageSrc: '../img/Card2.png',
    title: '01. Исследование и упаковка',
    description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
  },
  {
    imageSrc: '../img/Card2.png',
    title: '01. Исследование и упаковка',
    description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
  },
  {
    imageSrc: '../img/Card2.png',
    title: '01. Исследование и упаковка',
    description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
  },
];

const WorksBlock = () => {
  return (
    <div className="works-block">
      <div className="header-container">
        <h2>Наши работы, на которых<br />мы специализируемся</h2>
        <button>Все услуги</button>
      </div>
      <div className="works-grid">
        {works.map((work, index) => (
          <WorkCard
            key={index}
            imageSrc={work.imageSrc}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WorksBlock;
