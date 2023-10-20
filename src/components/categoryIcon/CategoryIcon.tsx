import { FC } from 'react';
import task from '../../assets/cart.svg';
import idea from '../../assets/lightbulb.svg';
import thought from '../../assets/bookmark.svg'

const CategoryIcon:FC<{category:string}> = ({ category }) => {
  switch (category) {
    case 'Task':
      return <img className="note__img" src={task} alt={category} />;
    case 'Idea':
      return <img className="note__img" src={idea} alt={category} />;
    case 'Random Thought':
      return <img className="note__img" src={thought} alt={category} />;
    default:
      return null;
  }
};

export default CategoryIcon;