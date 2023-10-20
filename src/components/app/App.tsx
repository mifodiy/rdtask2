import NoteList from '../noteList/NoteList';
import Header from '../header/Header';
import CreateBtn from '../createBtn/CreateBtn';
import CategoriesList from '../categoriesList/CategoriesList';
import Popup from '../popup/Popup';
import { FC } from 'react';
import CategoryHeader from '../categoryHeader/CategoryHeader';

const App:FC = () => {
  return (
    <div className="container">
      <Header/>
      <NoteList/>
      <CreateBtn/>
      <CategoryHeader/>
      <CategoriesList/>
      <Popup/>
    </div>
  );
}

export default App;