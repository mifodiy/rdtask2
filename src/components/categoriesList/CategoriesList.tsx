import { FC } from 'react';
import { useSelector } from "react-redux"


import './CategoriesList.css'
import CategoryItem from "../categoryItem/CategoryItem";
import { RootState } from '../../store';

const CategoriesList:FC = () => {
  const {categories} = useSelector((store: RootState) => store.notes);

  const elements = categories.map(({id, ...props}) => {
    return <CategoryItem key={id} {...props}/>
  })

  return (
    <ul className="category__list">
      {elements}
    </ul>
  )
}

export default CategoriesList;