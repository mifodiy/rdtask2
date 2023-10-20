import { FC } from 'react';
import archive from '../../assets/archive.svg';
import del from '../../assets/trash.svg';
import './Header.css';

const Header:FC = () => {
  return (
    <header className="header">
      <div className="header__name">Name</div>
      <div className="header__created">Created</div>
      <div className="header__category">Category</div>
      <div className="header__content">Content</div>
      <div className="header__dates">Dates</div>
      <div className="header__icons">
        <img className="header__archive" src={archive} alt="archive"/>
        <img className="header__delete" src={del} alt="delete"/>
      </div>
    </header>
        )
}

export default Header;