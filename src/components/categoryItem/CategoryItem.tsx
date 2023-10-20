import { FC, useState } from "react";
import CategoryIcon from "../categoryIcon/CategoryIcon";
import NoteList from "../noteList/NoteList";

type CategoryItemProps = {
  name: string;
  active: number;
  archive: number;
}

const CategoryItem:FC<CategoryItemProps> = ({ name, active, archive }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <li className="category__item" onClick={() => setIsOpen(!isOpen)}>
      <div className="category__name">
        <CategoryIcon category={name}/>
        <span>{name}</span>
      </div>
      <div className="category__active">{active}</div>
      <div className="category__archive">{archive}</div>
    </li>
    {isOpen && <NoteList category={name} archive={true}/>}
    </div>
    
  )
}

export default CategoryItem;