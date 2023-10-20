import { FC } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import NoteItem from '../noteItem/NoteItem';
import { archiveNote, changeUpdateStatus, removeNote, setUpdateId, unarchiveNote } from './notesSlice';
import { changePopupStatus } from '../popup/popupSlice';
import { RootState } from '../../store';

type NoteListProps = {
  category?: string, 
  archive?: boolean
}
const NoteList:FC<NoteListProps> = ({category, archive}) => {
  const {notes} = useSelector((state: RootState) => state.notes);
  let filterNote;

  const dispatch = useDispatch();

  const onDelete = (id: number) => {
    dispatch(removeNote(id));
  }

  const onArchive = (id: number) => {
    dispatch(archiveNote(id));
  }

  const onUnarchive = (id: number) => {
    dispatch(unarchiveNote(id));
  }
  
  const onEdit = (id: number) => {
    dispatch(setUpdateId(id));
    dispatch(changeUpdateStatus(true));
    dispatch(changePopupStatus(true))
  }

  if (category){
    filterNote = notes.filter(el => el.category === category && el.archived === archive); 
  }

  const elements = notes.map(({id, archived, ...props}) => {
    if (!archived && id){
      return <NoteItem key={id} id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} onEdit={onEdit} {...props}/>
    }
  })

  const filterElements = filterNote?.map(({id, archived, ...props}) => {
    if (id){
      return <NoteItem key={id} id={id} archived={archived} onUnarchive={onUnarchive} onDelete={onDelete} onArchive={onArchive} onEdit={onEdit} {...props}/>
    }
  })

  return (
    <ul className="note__list">
      {category && filterElements}
      {!category && elements}
    </ul>
  )
}

export default NoteList;