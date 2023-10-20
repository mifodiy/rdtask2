import { FC } from 'react';
import { useDispatch } from 'react-redux';
import './CreateBtn.css';
import {changePopupStatus} from '../popup/popupSlice';

const CreateBtn:FC = () => {
  const dispatch = useDispatch();

  return <button className="btn-create" onClick={() => dispatch(changePopupStatus(true))}>Create note</button>
}

export default CreateBtn;