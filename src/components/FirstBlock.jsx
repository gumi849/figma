import React from 'react';
import './FirstBlock.css';

const FirstBlock = () => {
  return (
    <div className="first-block">
      <div className="content">
        
        <h2>Высокие стандарты разработки</h2>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
          "рыбой" для текстов на латинице с начала XVI века. стандартной "рыбой" для текстов на латинице с начала XVI века.
        </p>
        <a href="#more-info">Подробнее о компании</a>
      </div>
      <div className="image">
        <img src="../img/card1.png" alt="" />
      </div>
    </div>
  );
};

export default FirstBlock;
