import { FC } from 'react';
import './NoteItem.css';
import edit from '../../assets/edit.svg';
import archive from '../../assets/archive.svg';
import del from '../../assets/trash.svg';
import CategoryIcon from '../categoryIcon/CategoryIcon';

type NoteItemProps = {
  id: number,
  name: string, 
  creationDate?: string, 
  category: string, 
  content: string, 
  dates?: string, 
  archived?: boolean, 
  onDelete: (id:number) => void, 
  onArchive: (id:number) => void, 
  onUnarchive?: (id:number) => void, 
  onEdit: (id:number) => void
}
const NoteItem:FC<NoteItemProps> = ({ id, name, creationDate, category, content, dates, archived, onDelete, onArchive, onUnarchive, onEdit }) => {
  return (
    <li className={`note__item ${id}`}>
      <div className="note__name">
        <CategoryIcon category={category}/>
        <span>{name}</span>
      </div>
      <div className="note__created">{creationDate}</div>
      <div className="note__category">{category}</div>
      <div className="note__content">{content}</div>
      <div className="note__dates">{dates}</div>
      {archived ?
      <button className="unarchiveBtn" onClick={() => {return onUnarchive ? onUnarchive(id): ''}}>Unarchive</button> :
      <div className="note__icons">
        <img className="note__edit" src={edit} alt="edit" onClick={() => onEdit(id)}/>
        <img className="note__archive" src={archive} alt="archive" onClick={() => onArchive(id)}/>
        <img className="note__delete" src={del} alt="delete" onClick={() => onDelete(id)} />
      </div>}

    </li>
  )
}

export default NoteItem;