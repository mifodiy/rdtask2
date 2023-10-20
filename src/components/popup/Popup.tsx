import { FC } from 'react';
import { useForm, SubmitHandler  } from "react-hook-form"
import './Popup.css'
import { useDispatch, useSelector } from "react-redux"
import { Note, addNewNote, changeUpdateStatus, updateNote } from "../noteList/notesSlice"
import { changePopupStatus } from './popupSlice';
import { RootState } from '../../store';

const Popup:FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue
  } = useForm<Note>();


  const dispatch = useDispatch();
  const {isUpdate, updateId, notes} = useSelector((state: RootState) => state.notes);
  const {popupIsActive} = useSelector((state: RootState) => state.popup);

  const editNote = notes.find(el => el.id === updateId);

  if (isUpdate && editNote) {
    setValue("name", editNote.name);
    setValue("category", editNote.category);
    setValue("content", editNote.content);
  }


  const onSubmit: SubmitHandler<Note> = (data) => {
    if (!isUpdate){
      dispatch(addNewNote(data));
    } else {
      dispatch(updateNote(data));
      dispatch(changeUpdateStatus(false))
    }
    reset();
    dispatch(changePopupStatus(false));
  }

  let popupClassName = 'popup';
  if (popupIsActive) {
    popupClassName += ' active';
  }
  return (
    <div className={popupClassName}>
      <form className="popup__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="popup__label">
          Name:
          <input className="popup__input popup__field" type="text" {...register("name")}required />
        </label>
        <label className="popup__label">
          Category:
          <select className="popup__select popup__field" {...register("category")} required>
            <option value="Random Thought">Random Thought</option>
            <option value="Task">Task</option>
            <option value="Idea">Idea</option>
          </select>
        </label>
        <label className="popup__label">
          Content:
          <textarea className="popup__textarea popup__field" {...register("content")} required></textarea>
        </label>
        <button className="popup__btn" type="submit">{!isUpdate ? 'Add note' : 'Confirm'}</button>
        <button className="popup__close" type="button" onClick={() => dispatch(changePopupStatus(false))}></button>
      </form>
    </div>
  )
}

export default Popup;